import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './pages/transfer/transfer.component';
import { TransferRoutingModule } from './transfer-routing.module';
import { FormsModule } from '@angular/forms';
import { DateFormatPipe } from './pipes/date.pipe';

@NgModule({
  declarations: [
    TransferComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    TransferRoutingModule,
    FormsModule
  ]
})
export class TransferModule { }
