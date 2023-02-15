import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { ServiceUserService } from '../../../user/services/user-service/service-user.service';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  frmFormulario: FormGroup;

  constructor(private readonly userService: ServiceUserService,
    private readonly route: Router) {
    this.frmFormulario = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(new RegExp(environment.regexEmail))]),
      password: new FormControl(null, [Validators.required, Validators.pattern(new RegExp(environment.regexPassword))])
    })
  }

  ngOnInit(): void { }

  login() {
    this.userService.login(this.frmFormulario.getRawValue()).subscribe({
      next: (data) => {
        localStorage.setItem("token", data.access_token)
        localStorage.setItem("id", data.id)
        this.goToHomeUser()
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message
        })
      },
      complete: () => {
        console.log("complete")
      }
    })
  }

  goToHomeUser() {
    this.route.navigate(["./customer/home"])
  }
}
