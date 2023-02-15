import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../../../user/services/user-service/service-user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  frmFormulario: FormGroup;
  public items: { field: string }[] = [
    { field: 'CC' },
    { field: 'TI' },
    { field: 'Pasaporte' },
  ];

  constructor(
    private readonly userService: ServiceUserService,
    private readonly router: Router
  ) {
    this.frmFormulario = new FormGroup({
      document: new FormControl(null, [
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(3),
      ]),
      fullName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(new RegExp(environment.regexEmail)),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(new RegExp(environment.regexPassword)),
      ]),
      documentType: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  createUser() {
    this.userService.createNewUser(this.frmFormulario.getRawValue()).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('id', data.id);
        this.goToHomeCustomer();
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => console.log('complete'),
    });
  }

  goToHomeCustomer() {
    this.router.navigate(['./customer/home']);
  }
}
