import { Component, OnInit } from '@angular/core';
import { IAccountRes } from '../../models/account.model';
import { ServiceAccountService } from '../../services/account-service/service-account.service';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.scss'],
})
export class AccountUserComponent implements OnInit {
  id: string | null;
  accounts:IAccountRes[]

  constructor(private readonly serviceAccount: ServiceAccountService) {
    this.id = '';
    this.accounts=[]
  }

  ngOnInit(): void {
    const idLocal = localStorage.getItem('id');
    this.id = idLocal !== null ? idLocal : '';
    this.serviceAccount.getAccountByCustomerId(this.id).subscribe({
      next:(data)=>{
        this.accounts=data
        console.log(data)
      }
    })
  }
}
