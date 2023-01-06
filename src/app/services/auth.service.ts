import { Injectable, NgZone } from '@angular/core';
import { UserInterface } from "../interfaces/user.interface";

import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any
  constructor(
    public fStore: AngularFirestore,
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public router: Router
    ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  setData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.fStore.doc(
      `users/${user.id}`
    )
    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(userData, {
      merge: true,
    })
  }

  loginUser(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('here')
        console.log(result.user)
        this.setData(result.user)
        console.log('here now')
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            console.log('All good')
            this.router.navigate(['/dashboard'])
          }
        })
      })
  }

  registerUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setData(result.user)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  forgotPassword(resetEmail: string) {
    this.afAuth.sendPasswordResetEmail(resetEmail)
      .then((result) => {
        window.alert('Password reset email has been sent successfully')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  loginGoogle() {
    return this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['dashboard'])
    })
  }

  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['/dashboard'])
        this.setData(result.user)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user')
      this.router.navigate(['/login'])
    })
  }
}
