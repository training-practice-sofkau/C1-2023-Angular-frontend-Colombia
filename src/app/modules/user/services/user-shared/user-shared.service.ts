import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { getUserModel } from '../../models/get-user-model';

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {
  private _user!: getUserModel;
  private _user$!: Subject<getUserModel> 
  changeState: EventEmitter<getUserModel>;

  constructor() {
    /*const state = localStorage.getItem('state');
    if (state !== null && state === 'true') {
      this._state = true;
    } else if (state !== null && state === 'false') {
      this._state = false;
    } else {
      this._state = false;
    }*/
    this.changeState = new EventEmitter<getUserModel>();
  }

  set customer(value: getUserModel) {
    this._user = value;
    //localStorage.setItem('state', String(value));
    this.changeState.emit(value);
  }

  get state(): getUserModel {
    return this._user;
  }
}
