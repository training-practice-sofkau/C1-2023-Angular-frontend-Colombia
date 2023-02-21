import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NewUserModel } from '../../models/new-user.model';
import { UserService } from '../../../user/services/user-profile/user.service';
import { MustMatch } from './help-must-match';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth/auth.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  routeMain: string[];
  routeSignIn: string[];
  //documentTypeList: Array<string> = ['C.C', 'Cedula extranjeria'];
  documentTypeList = { 
    CC: "52f0d46a-af27-451a-8021-9ab99e00ef1c",
    foreignerID: "52f0d46a-af27-451a-8021-9ab99e00ef1c"
   }

  newUser!: FormGroup
  submitted = false;
file: any;

  constructor(private readonly user$: UserService, private readonly authService: AuthService) {
    this.newUser = new FormGroup({
      documentTypeId: new FormControl('', [Validators.required]),            
      document: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30)
      ]),
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g)
      ]),
      avatar: new FormControl('')
    },  {
      validators: MustMatch('password', 'confirmPassword')
    } 
    );
    

    this.routeMain = ['../'];
    this.routeSignIn = ['../sign_in'];
  }

  ngOnInit(): void {
    
  }

  auth(): void {
    this.authService.GoogleAuth()
 }

onSubmit() {

   if (this.newUser.invalid) {
        return;
    }
      const user = {
        id: uuid(),
        fullName: this.newUser.get('fullName')?.value,
        email: this.newUser.get('email')?.value,
        phone: this.newUser.get('phone')?.value,
        document: this.newUser.get('document')?.value,
        documentTypeId: this.newUser.get('documentTypeId')?.value,
        password: this.newUser.get('password')?.value,
        avatarUrl: this.newUser.get('avatar')?.value
      }
   
  console.log('user ', this.newUser.value)
  this.user$.createUser(user).subscribe({
    next: data  => {
      if(data.status === 'success'){
        console.log('re ', data.token)
        localStorage.setItem('token', data.token);
        this.submitted = true;
        this.newUser.reset();
      }
    },
    error: err => console.error(err),
    complete: () => console.info('complete')
  }
  );
}

checkPasswords(group: FormGroup) {
  let pass = group.get('password')?.value;
  let confirmPass = group.get('confirmPassword')?.value;
  return pass === confirmPass ? null : { notSame: true };
}

/*MustMatch(controlName: string, matchingControlName: string){
  return (formGroup:FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if(matchingControl.errors && !matchingControl.errors['MustMatch']){
      return
    }
    if(control.value !== matchingControl.value){
      matchingControl.setErrors( {MustMatch: true});
    } else {
      matchingControl.setErrors(null)
    }
  }

}*/

//get f() { return this.newUser.controls; }
get f(): { [key: string]: AbstractControl; }
{
    return this.newUser.controls;
}

}



