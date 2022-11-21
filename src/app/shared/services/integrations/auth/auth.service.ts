import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from "@angular/router";
import {BehaviorSubject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private subscription: Subscription[] = [];
  userInfo:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private authFirebase: AngularFireAuth, private router: Router) {
    this.authFirebase.authState.subscribe((user) => {
      this.userInfo.next(user);
      if (user) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['login']);
      }
    });
    // this.subscription.push(authSub);
  }
  // ngOnDestroy(): void {
  //   this.subscription.map((sub) => sub.unsubscribe());
  // }
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
}
