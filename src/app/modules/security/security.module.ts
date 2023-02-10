import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { FormSignupComponent } from './components/form-signup/form-signup.component';



@NgModule({
  declarations: [
    FormComponent, LoginComponent, SingupComponent, FormSignupComponent
  ],
  imports: [
    CommonModule, SecurityRoutingModule
  ]
})
export class SecurityModule { }
