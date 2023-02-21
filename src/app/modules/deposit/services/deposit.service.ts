import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepositModel } from '../models/deposit.model';
import { MakeDepositModel } from '../models/make-deposit.model';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(private readonly httpClient: HttpClient) { }

  getDepositsByAccount(id: string): Observable<DepositModel[]>{
    return this.httpClient.get<DepositModel[]>(
      `/api/deposit/${id}?offset=0&limit=3`
    )
  }

  makeADeposit(deposit: MakeDepositModel): Observable<DepositModel>{
    return this.httpClient.post<DepositModel>(
      `/api/deposit`,
      deposit
    )
  }
}
