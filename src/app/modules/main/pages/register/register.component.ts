import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  frmFormulario: FormGroup;
  routrHome: string[];

  constructor(private readonly user$: UsersService) {
    this.routrHome = ['../'];
    this.frmFormulario = new FormGroup({
      documentTypeId: new FormControl(null, Validators.required),
      document: new FormControl(null, Validators.required),
      fullName: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(new RegExp(environment.regexEmail)),
      ]),
      phone: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required),
    });
  }
  senData(): void {
    console.log('senData', this.frmFormulario);
    console.log(this.frmFormulario.getRawValue());
    this.user$.createUser(this.frmFormulario.getRawValue()).subscribe({
      next: data => {
        localStorage.setItem('id', data.id);
      },
    });
  }
}
