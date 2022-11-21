import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFirebase: AngularFireAuth, private router: Router) { }

  emailSignup(userEmail: string, userPassword: string) {
    this.authFirebase.createUserWithEmailAndPassword(userEmail, userPassword)
      .then(userCredentials => {
        console.log('Success!', userCredentials);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  loginWithEmail(userEmail: string, userPassword: string) {
    this.authFirebase.signInWithEmailAndPassword(userEmail, userPassword)
      .then(userCredentials => {
        console.log('Nice, it worked!', userCredentials);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }
}
