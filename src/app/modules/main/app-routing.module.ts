import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { InfoUserComponent } from './pages/info-user/info-user.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { TransferComponent } from './pages/transfer/transfer.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'infouser',
    component: InfoUserComponent,
  },
  {
    path: 'deposit',
    component: DepositComponent,
  },
  {
    path: 'transfer',
    component: TransferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
