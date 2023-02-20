import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';

const routes: Routes = [
  { path: '', component: CustomerDetailComponent },
  { path: '', redirectTo: 'details', pathMatch: 'full' },
  { path: '**', redirectTo: 'signin' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
