import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient: HttpClient) { 
     
  }


  getAllTransfer(){
     this.httpClient.get('')
  }
}
