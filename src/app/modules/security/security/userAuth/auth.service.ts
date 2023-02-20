import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { StateService } from '../../../../shared/services/state.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private state$: StateService
  ) {}

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        localStorage.setItem(
          'userName',
          result.user?.displayName ? result.user?.displayName : 'User'
        );
        localStorage.setItem(
          'userAvatar',
          result.user?.photoURL ? result.user.photoURL : environment.urlIconUser
        );
        localStorage.setItem('uidUser', result.user?.uid as string);
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.router.navigate(['to-do-list/dashboard']);
          }
        });
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        localStorage.setItem(
          'userName',
          result.user?.displayName ? result.user?.displayName : 'User'
        );
        localStorage.setItem(
          'userAvatar',
          result.user?.photoURL ? result.user.photoURL : environment.urlIconUser
        );
        localStorage.setItem('uidUser', result.user?.uid as string);
        this.router.navigate(['to-do-list/dashboard']);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['to-do-list/dashboard']);
    });
  }
  // Auth logic to run auth providers
  private AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(result => {
        localStorage.setItem('userName', result.user?.displayName as string);
        localStorage.setItem('userAvatar', result.user?.photoURL as string);
        localStorage.setItem('uidUser', result.user?.uid as string);
        this.router.navigate(['to-do-list/dashboard']);
      })
      .catch(error => {
        window.alert(error);
      });
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('uidUser');
      localStorage.removeItem('userName');
      localStorage.removeItem('userAvatar');
      this.router.navigate(['sign-in']);
    });
  }
}
