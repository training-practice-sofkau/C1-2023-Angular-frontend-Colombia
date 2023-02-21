import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LandingPgeComponent } from './pages/landing-pge/landing-pge.component';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';
import { UserProfileComponent } from '../user/pages/user-profile/user-profile.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['p']);
//const redirectLoggedInToDashboard = () => redirectLoggedInTo(['']);  

const routes: Routes = [
  {
    path: '', // localhost:4200/hoja-de-vida
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: LandingPgeComponent,
        //canActivate: [AngularFireAuthGuard],
        //data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      /*{
        path: 'p',
        component: UserProfileComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToDashboard }
  }*/
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }


