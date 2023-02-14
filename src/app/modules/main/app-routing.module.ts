import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../account/pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoAccountComponent } from '../account/pages/info-account/info-account.component';
import { InfoCostumerComponent } from '../user/pages/info-costumer/info-costumer.component';
import { InfoDepositComponent } from './pages/info-deposit/info-deposit.component';
import { InfoTransferComponent } from './pages/info-transfer/info-transfer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateCostumerComponent } from '../user/pages/update-costumer/update-costumer.component';
import { HomeCustomerComponent } from '../user/pages/home-customer/home-customer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer', component: InfoCostumerComponent },
  { path: 'transfer', component: InfoTransferComponent },
  { path: 'deposit', component: InfoDepositComponent },
  { path: 'account', component: AccountComponent },
  { path: 'customer/updateCustomer', component: UpdateCostumerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account/:id', component: InfoAccountComponent },
  { path: 'customer/home', component: HomeCustomerComponent },
  { path: 'customer/update/:id', component: UpdateCostumerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
