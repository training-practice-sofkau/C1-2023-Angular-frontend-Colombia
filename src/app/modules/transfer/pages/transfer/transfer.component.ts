import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MakeTransferModel } from '../../models/make-transfer.model';
import { TransferModel } from '../../models/transfer.model';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {
  amount!: string;
  transfersOutCome!: TransferModel[]
  transfersInCome!: TransferModel[]
  //transfer!: MakeTransferModel
  accountIdIncome!: string;
  reason!: string

  constructor(private router: Router,
    private readonly transferService: TransferService){
    }

    ngOnInit(): void {
      this.getTransferOutcome()
      this.getTransferIncome()
    }

  getTransferOutcome(){
    this.transferService.getAllByOutcome().subscribe({
      next: data  => {
        console.log('re out ', data)
        this.transfersOutCome = data
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }

  getTransferIncome(){
    this.transferService.getAllByIncome().subscribe({
      next: data  => {
        console.log('re ', data)
        this.transfersInCome = data
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }

  makeTransfer(){
    const date = new Date()
    const accountId = localStorage.getItem('accountId')
    console.log('accountId ', accountId)
    const t = {
      outcome: accountId ? accountId : '',
      income: this.accountIdIncome,
      amount: Number(this.amount),
      reason: this.reason,
      dateTime: date.getTime()
    }
    this.transferService.makeTransfer(t).subscribe({
      next: data  => {
        console.log('re ', data)
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }

  
}
