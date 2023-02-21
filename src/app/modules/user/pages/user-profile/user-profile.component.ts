import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/authentication/services/auth/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/modules/authentication/components/login/help-must-match';
import { AccountService } from 'src/app/modules/account/services/account/account.service';
import { AccountModel } from 'src/app/modules/account/models/account.model';
import { DepositService } from 'src/app/modules/deposit/services/deposit.service';
import { MakeDepositModel } from 'src/app/modules/deposit/models/make-deposit.model';
import { StateBalanceService } from 'src/app/modules/account/services/state-balance/state-balance.service';
import { UserService } from '../../services/user-profile/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  routeTransfer:string[];
  routeDeposit: string[];
  routeAccount:string[];
  photo: string
  updatUser: FormGroup
  id: string 
  balance!: number
  account!: AccountModel[]
  depositAmount!: MakeDepositModel
  amount!: number
  buttonClicked = false;
  stateBalance: number
  withdrawBalance!: number

  @Output() changeRouter: EventEmitter<String[]>;

  documentTypeList = { 
    CC: "52f0d46a-af27-451a-8021-9ab99e00ef1c",
    foreignerID: "52f0d46a-af27-451a-8021-9ab99e00ef1c"
   }

  constructor(private router: Router, private readonly user$: UserService, 
    private readonly authService: AuthService, private accountService: AccountService,
    private readonly depositService: DepositService, private stateBalanceService: StateBalanceService){
    this.stateBalance = this.stateBalanceService.balance

    this.changeRouter = new EventEmitter<String[]>();

    this.routeTransfer = ['/transfer']
    this.routeAccount = ['/account']
    this.routeDeposit = ['/deposit']
    this.photo = ''
    this.id = ''

    this.updatUser = new FormGroup({
      documentTypeId: new FormControl('', [Validators.required]),            
      document: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30)
      ]),
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g)
      ]),
      avatarUrl: new FormControl('')
    },  {
      validators: MustMatch('password', 'confirmPassword')
    } 
    );
  }

  ngOnInit(): void {
    this.getCustomer()
    //this.getBalance()
    /***/ 
    this.getAccounts()
  }

  deleteCustomer(){
    const user = localStorage.getItem('user')
    const u = JSON.parse(user ? user : '')
    Swal.fire({
      title: 'Estas seguro?',
      text: "Estas seguro de eliminar tu cuenta!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:  '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.user$.deleteUser(u.uid).subscribe({
          next: data  => {
            if(data){
              Swal.fire(
                'Eliminado!',
                'Se ha eliminado la cuenta.',
                'success'
              )
              this.authService.SignOut()
              window.location.reload();
            } else {
              Swal.fire('Para elimanar cuenta tu balance debe ser 0')
            }
          },
          error: err => console.error('err', err),
          complete: () => console.info('complete')
        });
      }
    })
  }

  changeRouterButton(router: String[]): void {
    console.log('cambiarEstadoC2', router);
    this.changeRouter.emit(router);
  }

  changeBalance(): void {
    this.balance = this.stateBalanceService.balance;
    this.stateBalanceService.changeBalance
  }

  withdrawDeposit(){
    console.log('THIS', this.amount)
    const date = new Date()
    const accountId = localStorage.getItem('accountId')
    console.log('with ', this.withdrawBalance)  
    this.user$.withdrawDeposit(accountId ? accountId : '', this.withdrawBalance).subscribe({
      next: data  => {
        this.stateBalanceService.balance = this.stateBalanceService.balance - this.withdrawBalance
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }

  makeDeposit(){
    console.log('THIS', this.amount)
    const date = new Date()
    const accountId = localStorage.getItem('accountId')
    this.depositAmount = {
      account: accountId ? accountId : '',
      amount: Number(this.amount),
      dateTime: date.getTime()
    }
    this.depositService.makeADeposit(this.depositAmount).subscribe({
      next: data  => {
        console.log('re ', data.amount)
        //this.balance = data
        this.stateBalanceService.balance = data.amount
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }

  logout(): void {
    this.authService.SignOut();
  }

  getAccounts(){
    console.log('entra en get account')
    const user = localStorage.getItem('user')
    let u;
    if(user){
      u = JSON.parse(user ? user : '')
    }
    const id = localStorage.getItem('uid')
    this.accountService.getAccountsByCustomer(id ? id : '').subscribe({
      next: data  => {
        this.account = data
        localStorage.setItem('accountId', this.account[0].id)
        this.accountService.getBalanceByIdAccount(this.account[0].id).subscribe({
          next: data  => {
            //this.balance = data
            this.stateBalanceService.balance = data
            //this.balance = this.stateBalanceService.balance
          },
          error: err => console.error('err', err),
          complete: () => console.info('complete')
        }
        );
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }

 /* getBalance(){
    console.log('entra en get account')
    const user = localStorage.getItem('user')
    const u = JSON.parse(user ? user : '')
    this.accountService.getAccountsByCustomer(u.uid).subscribe({
      next: data  => {
        this.account = data
        localStorage.setItem('accountId', this.account[0].id)
        this.accountService.getBalanceByIdAccount(this.account[0].id).subscribe({
          next: data  => {
            this.balance = data
            this.stateBalanceService.balance = this.balance
            this.balance = this.stateBalanceService.balance
          },
          error: err => console.error('err', err),
          complete: () => console.info('complete')
        }
        );
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }*/

  /*getBalance(){
    this.accountService.getBalanceByIdAccount(this.account[0].id).subscribe({
      next: data  => {
        console.log('reBalanc ', data)
        this.balance = data
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }*/

  updateUser(){
    const user = {
      id: this.id,
      fullName: this.updatUser.get('fullName')?.value,
      email: this.updatUser.get('email')?.value,
      phone: this.updatUser.get('phone')?.value,
      document: this.updatUser.get('document')?.value,
      documentTypeId: this.updatUser.get('documentTypeId')?.value,
      password: this.updatUser.get('password')?.value,
      avatarUrl: this.updatUser.get('avatar')?.value
    }

    this.user$.updateUser(user).subscribe({
      next: data  => {
        if(data.status === 'success'){
          console.log('re ', data.token)
        }
      },
      error: err => console.error(err),
      complete: () => console.info('complete')
    }
    );
  }

  getCustomer(){
    console.log('entra en get')
    const id = localStorage.getItem('uid')
    if(id){
      console.log('entra en get')
      this.user$.getCustomer(id).subscribe({
        next: data  => {
          console.log('re ', data)
          //this.user = data
          this.updatUser.get('fullName')?.setValue(data.fullName)
          this.updatUser.get('email')?.setValue(data.email)
          this.updatUser.get('phone')?.setValue(data.phone)
          this.updatUser.get('document')?.setValue(data.document)
          this.updatUser.get('documentTypeId')?.setValue(data.documentType)
          this.updatUser.get('password')?.setValue(data.password)  
          this.updatUser.get('avatar')?.setValue(data.avatarUrl)                  
          this.id = data.id
          this.photo = data.avatarUrl

        },
        error: err => console.error('err', err),
        complete: () => console.info('complete')
      }
      );
    }
    //this.user$.getCustomer()
  }
  goTo(): void {
    console.log('enviar')
   this.router.navigate(['transfer', 't']);
   //this.router.navigate(['/log_in']);

  }

}
function JWTDecode(token: string) {
  throw new Error('Function not implemented.');
}



/*this.user = {
      id: '',
      state: true,
      documentType: {
      id: '',
      state: true
    },
    document: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    avatarUrl: ''
    }*/