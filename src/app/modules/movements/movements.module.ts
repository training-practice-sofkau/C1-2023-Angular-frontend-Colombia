import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsRoutingModule } from './movements-routing.module';
import { HistoryComponent } from './components/history/history.component';
import { MovementsComponent } from './pages/movements/movements.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovementsComponent, HistoryComponent, TransferComponent],
  imports: [CommonModule, MovementsRoutingModule, FormsModule],
})
export class MovementsModule {}
