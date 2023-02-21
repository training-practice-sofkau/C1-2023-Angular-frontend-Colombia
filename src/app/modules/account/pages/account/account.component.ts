import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from '../../models/account.model';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  accounts!: AccountModel[]

  constructor(private router: Router,
    private readonly accountService: AccountService){
    }

    ngOnInit(): void {
      this.getAccounts()
    }

    getAccounts(){
      console.log('entra en get account')
      const user = localStorage.getItem('user')
      const u = JSON.parse(user ? user : '')
      console.log('user ', u)
      this.accountService.getAccountsByCustomer(u.uid).subscribe({
        next: data  => {
          console.log('re ', data)
          this.accounts = data
          localStorage.setItem('accountId', this.accounts[0].id)
        },
        error: err => console.error('err', err),
        complete: () => console.info('complete')
      }
      );
    }
}
