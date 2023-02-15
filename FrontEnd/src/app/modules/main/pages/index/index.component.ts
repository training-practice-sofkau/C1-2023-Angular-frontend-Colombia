import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment.prod';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  
routeRegister: string [];
routeUser: string[];

frmFormularyLogin: FormGroup;

  constructor() {
    this.routeRegister = ['register']
    this.routeUser = ['user']
  
    this.frmFormularyLogin = new FormGroup({
        userName : new FormControl("", [Validators.required ,Validators.minLength(6), Validators.maxLength(80)]),
        password: new FormControl("", [Validators.required , Validators.minLength(8), Validators.pattern(new RegExp (environment.regexPassword))]),
    })
  }

  sendDataFormulary(): void {
    console.log('endDataFormulary' , this.frmFormularyLogin)
    console.log(this.frmFormularyLogin.getRawValue())
  }
}
