import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { TransferComponent } from '../transfer/pages/transfer/transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonSharedComponent } from 'src/app/shared/components/button-shared/button-shared.component';
import { BalanceComponent } from '../account/components/balance/balance.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    ButtonSharedComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class UserModule { }
