import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { singInModel } from '../../models/sing-in.model';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  selector: 'login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private readonly customerService: CustomersService,
    private router: Router
  ) {
    this.email = '';
    this.password = '';
  }
  singIn(): void {
    const customer = new singInModel(this.email, this.password);
    const newCustomer = this.customerService.singIn(customer).subscribe({
      next: (data) => {
        localStorage.setItem('id', data.id);
        localStorage.setItem('token', data.access_token);
      },
      error: (err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Datos incorrectos',
          showConfirmButton: false,
          timer: 3500,
        });
      },
      complete: () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Inicio de sesión correcto',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          this.router.navigate(['account']);
        }, 1500);
      },
    });
  }

  ngOnInit(): void {}
}
