import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-after-login',
  templateUrl: './header-after-login.component.html',
  styleUrls: ['./header-after-login.component.scss']
})
export class HeaderAfterLoginComponent implements OnInit {

  routeInfoCustomer: string[]
  routeAccount: string[]
  routeInfoDeposit: string[]
  routeInfoTransfer: string[]
  routeHome: string[]

  constructor() {
    this.routeInfoCustomer = ["customer"]
    this.routeAccount = ["account"]
    this.routeInfoDeposit = ["deposit"]
    this.routeInfoTransfer = ["transfer"]
    this.routeHome = [""]
  }

  ngOnInit(): void {
  }

}