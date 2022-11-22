import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from "@angular/router";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {CustomHttpService} from "@services/custom-http/custom-http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFirebase: AngularFireAuth, private router: Router, private customHttpService: CustomHttpService) {}

  emailSignup(userEmail: string, userPassword: string): Promise<any> {
    return this.authFirebase.createUserWithEmailAndPassword(userEmail, userPassword)
      .then(userCredentials => {
        console.log('Success!', userCredentials);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  loginWithEmail(userEmail: string, userPassword: string): Promise<any> {
    return this.authFirebase.signInWithEmailAndPassword(userEmail, userPassword)
      .then(userCredentials => {
        console.log('Nice, it worked!', userCredentials);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logoutUser(): Promise<any> {
    return this.authFirebase.signOut();
  }

  getUserRefreshToken(): Observable<any> {
    return new Observable((observer) => {
      this.authFirebase.onAuthStateChanged(user => {
        observer.next(user?.refreshToken);
        if (user) {
          console.log("USER", user.refreshToken);
        } else {
          console.log("USER", 'sign out');
        }
      })
    })
  }
}
