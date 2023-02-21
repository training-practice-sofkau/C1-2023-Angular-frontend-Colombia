import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepositModel } from '../../models/deposit.model';
import { MakeDepositModel } from '../../models/make-deposit.model';
import { DepositService } from '../../services/deposit.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {
  deposits!: DepositModel[]
  depositAmount!: MakeDepositModel
  amount!: number

  constructor(private router: Router, private readonly depositService: DepositService){}

  ngOnInit(): void {
    this.getDesposits()
  }

  getDesposits() {
    const accountId = localStorage.getItem('accountId')
    console.log('vdsft', accountId)
    this.depositService.getDepositsByAccount(accountId ? accountId : '').subscribe({
      next: data  => {
        console.log('re ', data)
        this.deposits = data
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }

  makeDeposit(){
    console.log('THIS', this.amount)
    const date = new Date()
    const accountId = localStorage.getItem('accountId')
    this.depositAmount = {
      account: accountId ? accountId : '',
      amount: Number(this.amount),
      dateTime: date.getTime()
    }
    this.depositService.makeADeposit(this.depositAmount).subscribe({
      next: data  => {
        console.log('re ', data)
        window.location.reload();
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }
}
