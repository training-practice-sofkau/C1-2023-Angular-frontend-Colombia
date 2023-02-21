import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';
import { LoginComponent } from '../authentication/components/login/login.component';
import { UserProfileComponent } from '../user/pages/user-profile/user-profile.component';
import { LandingPgeComponent } from '../landing-page/pages/landing-pge/landing-pge.component';
import { UserGuardGuard } from '../user/guards/user-guard.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['profile/p']);

const routes: Routes = [
  /*{
    path: '',
    component: LandingPgeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard }
  },
  {
    path: 'profile/p',
    component: UserProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },*/
  {
    path: '',
    loadChildren: () => 
    import('../landing-page/landing-page.module').then(
      m => m.LandingPageModule
    )
  },
  {
    path: 'profile',
    loadChildren: () => 
    import('../user/user.module').then(
      m => m.UserModule
    ),
    canActivate: [UserGuardGuard]
  },
  {
    path: 'transfer',
    loadChildren: () => 
    import('../transfer/transfer.module').then(
      m => m.TransferModule
    ),
    canActivate: [UserGuardGuard]
  },
  {
    path: 'account',
    loadChildren: () => 
    import('../account/account.module').then(
      m => m.AccountModule
    ),
    canActivate: [UserGuardGuard]
  },
  {
    path: 'deposit',
    loadChildren: () => 
    import('../deposit/deposit.module').then(
      m => m.DepositModule
    ),
    canActivate: [UserGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
