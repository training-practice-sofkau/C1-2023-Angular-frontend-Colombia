import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../authentication/layouts/main-layout/main-layout.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';
import { UserGuardGuard } from './guards/user-guard.guard';
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['']);  


const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    //data: { authGuardPipe: redirectLoggedInToDashboard },
    //canActivate: [UserGuardGuard],

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
