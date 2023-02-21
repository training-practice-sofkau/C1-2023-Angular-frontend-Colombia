import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent {
  data: string
  tele: string
  date: number

  constructor(){ 
    this.data = 'mariana'
    this.tele = '3177019862'
    this.date = 1671080400000
  }

}
