import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { createUserWithEmailAndPassword, Auth } from '@angular/fire/auth'
import { UserService } from '../../../user/services/user-profile/user.service';
import { NewUserModel } from '../../models/new-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private router: Router, 
    private afAuth: AngularFireAuth, 
    private readonly user$: UserService) { }

  GoogleAuth() {
    //console.log('entra en g')
   return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      console.log('entra', res)
    }, err => {
      console.log('err ', err)
    });
  }

  registerWithEmailandPassword({email, password}: any){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(result => {
      console.log('result', result.user?.email);

      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('uid', result.user?.uid ?? '');
      result.user
        ?.getIdToken()
        .then(token => localStorage.setItem('token', token));
        //return result.user
    })
    .catch(err => console.log('err', err))
  }

  loginGoogle() {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  state(){
    let u
    this.afAuth.authState.subscribe((user) => {
      console.log('state', user)
      u =  user;
    });
    return u
    //console.log('thi ', this.user)
    //return this.user
    //console.log('this ', this.user)
  }

  private AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(result => {
        //this.router.navigate(['profile/p']);
        console.log('result', result.user);
        const u = result.user
        const user = {
          id: u?.uid ? u.uid : '',
          documentTypeId: null,            
          document: null,
          fullName: u?.displayName ? u.displayName : '',
          email: u?.email ? u.email : '',
          phone: null,
          password: null,
          avatarUrl: u?.photoURL
      }

      this.user$.createUser(user).subscribe({
        next: data  => {
          if(data.status === 'success'){
            console.log('re ', data.token)
            //localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('uid', result.user?.uid ?? '');
            result.user
              ?.getIdToken()
              .then(token => localStorage.setItem('token', token));
          }
        },
        error: err => {
          console.error('err ', err)
        },
        complete: () => {
          console.info('complete')
          this.router.navigate(['profile']);
        } 
      })
      })
      .catch(error => {
        window.alert(error);
      });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('uid');
      localStorage.removeItem('token');
      localStorage.removeItem('accountId');
      localStorage.removeItem('state');
      this.router.navigate(['']);
    });
  }
}
