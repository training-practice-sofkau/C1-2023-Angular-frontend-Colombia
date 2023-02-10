import { Component, OnInit } from '@angular/core';

@Component({
  //standalone: true,
  selector: 'sofka-bank-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signIn!: string[];
  signUp!: string[];

  constructor() {
    this.signIn = ['../signin'];
    this.signUp = ['../signup'];
  }

  ngOnInit(): void {
  }

}
