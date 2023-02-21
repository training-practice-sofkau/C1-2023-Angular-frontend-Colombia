import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositComponent } from './pages/deposit/deposit.component';
import { DepositRoutingModule } from './deposit-routing.module';
import { FormsModule } from '@angular/forms';
import { BalanceComponent } from '../account/components/balance/balance.component';



@NgModule({
  declarations: [
    DepositComponent,
  ],
  imports: [
    CommonModule,
    DepositRoutingModule,
    FormsModule,
  ]
})
export class DepositModule { }
