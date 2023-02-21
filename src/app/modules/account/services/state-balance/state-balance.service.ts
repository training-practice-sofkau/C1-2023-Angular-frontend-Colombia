import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateBalanceService {
  private _balance: number;
  changeBalance: EventEmitter<number>;

  constructor() {
    const state = localStorage.getItem('state');
    this._balance = 0;
    
    this.changeBalance = new EventEmitter<number>();
  }

  set balance(value: number) {
    this._balance = value;
    localStorage.setItem('state', String(value));
    this.changeBalance.emit(value);
  }

  get balance(): number {
    return this._balance;
  }
}
