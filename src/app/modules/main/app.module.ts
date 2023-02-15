import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './pages/app/app.component';
import { IndexComponent } from './pages/index/index.component';
import { MyPipePipe } from './pipes/my-pipe/my-pipe.pipe';
import { environment } from '../../../environments/environment';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, MyPipePipe, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
