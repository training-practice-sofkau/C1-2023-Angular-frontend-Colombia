import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/modules/account/models/account.model';
import { AccountService } from 'src/app/modules/account/services/account/account.service';
import { StateBalanceService } from '../../services/state-balance/state-balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  balance!: number
  account!: AccountModel[]

  constructor(private stateBalanceService: StateBalanceService){}

  ngOnInit(){
    this.stateBalanceService.changeBalance.subscribe({
      next: (balance: number) => {
        console.log('BALANCE IN COMPONE', balance)
        this.balance = balance
      },
      error: (err: Error) => (console.log(err)),
      
    })
  }

  /*getBalance(){
    console.log('entra en get account')
    const user = localStorage.getItem('user')
    const u = JSON.parse(user ? user : '')
    this.accountService.getAccountsByCustomer(u.uid).subscribe({
      next: data  => {
        this.account = data
        localStorage.setItem('accountId', this.account[0].id)
        this.accountService.getBalanceByIdAccount(this.account[0].id).subscribe({
          next: data  => {
            this.balance = data
            this.stateBalanceService.balance = this.balance
            this.balance = this.stateBalanceService.balance
          },
          error: err => console.error('err', err),
          complete: () => console.info('complete')
        }
        );
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }*/


}
