import { TimeFormatPipe } from './../pipes/time-format.pipe';
import { relativeTime } from './../pipes/relative-time.pipe';
import { PhoneNumberPipe } from './../pipes/phoneNumber.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../pages/app/app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { HeroSearchComponent } from '../components/hero-search/hero-search.component';
import { MessagesComponent } from '../components/messages/messages.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    PhoneNumberPipe,
    relativeTime,
    TimeFormatPipe,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
