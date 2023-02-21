import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenModel } from '../../models/sig-in-token.model';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../../user/services/user-profile/user.service';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  routeLogIn: string[];
  routeProfile: string[];
  user!: FormGroup
  submitted = false;
  userExist = true
  modal : NgbModalRef | undefined;

  constructor(private router: Router, private readonly user$: UserService,
    private readonly authService: AuthService) {

    this.routeLogIn = ['../log_in'];
    this.routeProfile = ['/profile']
    this.user = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      
     });
  }

  registerFire(){
    const user = {
      password: this.user.get('password')?.value,
      email: this.user.get('email')?.value,
    }
    this.authService.registerWithEmailandPassword(this.user.value)
  }

  otra(){
    this.router.navigate(['profile', 'p']);
  }

  auth(): void {
    this.authService.GoogleAuth()
 }  
  onSubmit() {
    this.submitted = true;

   if (this.user.invalid) {
        return;
    }
      const user = {
        password: this.user.get('password')?.value,
        email: this.user.get('email')?.value,
      }
   
  console.log('user ', this.user.value)

  this.user$.signIn (user).subscribe({
    next: data  => {
      console.log('re ', data)
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('uid', data.user?.id ?? '');
     /* if(data.status === 'success'){
        this.authService.registerWithEmailandPassword(this.user.value)
      }*/
    },
    error: err => {
      console.log('entra en error')
      console.log('user ', this.userExist)
      this.userExist = false
      console.error('err', err)
    },
    complete: () => {
      this.router.navigate(['profile']);
      console.info('complete')
    } 
  }
  );
}

  goTo(): void {
    console.log('enviar')
    // this.router.navigate(['../experiencia-laboral'], {
    //   relativeTo: this.route,
    // });
    //this.router.navigate(['/profile/p']);
    
  //  this.router.navigate(['/profile']);
   // this.router.navigate(['./', 'profile', 'profile']);
  // this.router.navigate(['../../../', 'profile', 'p']);
   //this.router.navigate(['/log_in']);

  }

}
