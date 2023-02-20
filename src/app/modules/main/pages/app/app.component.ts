import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'sofka-bank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    AOS.init();
  }
  title = 'C1-2023-Angular-frontend-Colombia';
}
