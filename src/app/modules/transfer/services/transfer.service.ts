import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INewTransfers } from '../interfaces/transfers.model';
import { MakeTransferModel } from '../models/make-transfer.model';
import { TransferModel } from '../models/transfer.model';
const url = 'localhost:3000/transfer/outcome/04b571b3-0b96-4828-ab17-f79c5a764333?limit=6&offset=0&startDate=1640995200000&endDate=1652572800000'
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private readonly httpClient: HttpClient) { }

  getAllByOutcome(): Observable<TransferModel[]> {
    const accountId = localStorage.getItem('accountId')
    return this.httpClient.get<TransferModel[]>(
      `/api/transfer/outcome/${accountId}?limit=6&offset=0`
    );
  }

  getAllByIncome(): Observable<TransferModel[]> {
    const accountId = localStorage.getItem('accountId')
    return this.httpClient.get<TransferModel[]>(
      `/api/transfer/income/${accountId}?limit=6&offset=0`
    );
  }

  makeTransfer(transfer: MakeTransferModel): Observable<TransferModel>{
    return this.httpClient.post<TransferModel>(
      `/api/transfer`,
      transfer
    )
  }
}
