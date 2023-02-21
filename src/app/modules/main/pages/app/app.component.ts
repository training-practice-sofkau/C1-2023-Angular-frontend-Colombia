import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  routeSigIn: string[]

  constructor(){
    this.routeSigIn = ['signIn']
  }
}
