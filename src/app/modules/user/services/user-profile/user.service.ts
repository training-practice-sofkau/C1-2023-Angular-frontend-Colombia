import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from 'src/app/modules/authentication/interfaces/users.interface';
import { NewUserModel } from 'src/app/modules/authentication/models/new-user.model';
import { TokenModel } from 'src/app/modules/authentication/models/sig-in-token.model';
import { SignInModel } from 'src/app/modules/authentication/models/sign-in.model';
import { INewTransfers } from 'src/app/modules/transfer/interfaces/transfers.model';
import { getUserModel } from 'src/app/modules/user/models/get-user-model';
import { INewUser } from '../../../authentication/interfaces/new-user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly httpClient: HttpClient) { }

  deleteUser(id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(
      `/api/customer/${id}`,
    );
  }

  createUser(user: NewUserModel): Observable<TokenModel> {
    console.log('USER ', user)
    const res =  this.httpClient.post<TokenModel>(
      '/api/security/register',
      user
    );
    return res
  }

  updateUser(user: NewUserModel): Observable<TokenModel>{
    return this.httpClient.put<TokenModel>(
      `/api/customer/${user.id}`,
      user
    )
  }

  signIn(user: SignInModel): Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(
      '/api/security/signIn',
      user
    )
  }

  getCustomer(id: string): Observable<getUserModel>{
    return this.httpClient.get<getUserModel>(
      `/api/customer/${id}`
    )
  }

  getAll(): Observable<IUsers> {
    return this.httpClient.get<IUsers>('/api/customer');
  }

  withdrawDeposit(id: string, amount: number) {
    return this.httpClient.post(
      `/api/account/balance/remove/${id}?amount=${amount}`,
      {}
    )
}
  }
