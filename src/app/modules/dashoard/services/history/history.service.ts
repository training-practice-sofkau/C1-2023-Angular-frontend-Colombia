import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { depositInterface } from '../../interfaces/deposit.Interface';
import { TransferInterface } from '../../interfaces/transfer.interface';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private readonly httpClient: HttpClient) {}
  getDepositAll(id: string): Observable<depositInterface[]> {
    return this.httpClient.get<depositInterface[]>(
      'http://localhost:3000/deposit/history/' + id
    );
  }
  getTransferHistory(id: string): Observable<TransferInterface[]> {
    const body = { actualPage: 1, range: 5 };
    return this.httpClient.post<TransferInterface[]>(
      'http://localhost:3000/transfer/history/' + id,
      body
    );
  }
}
