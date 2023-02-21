import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-shared',
  templateUrl: './button-shared.component.html',
  styleUrls: ['./button-shared.component.scss']
})
export class ButtonSharedComponent {
  @Input() message!: string;

  router: string[]
  @Output() changeRouter: EventEmitter<String[]>;

  constructor() {
    this.router = [];
    this.changeRouter = new EventEmitter<String[]>();
  }

  ngOnInit(): void {
    this.changeRoute()
 }

  changeRoute(): void {
    if(this.message === 'Mis Cuentas'){
      this.router = ['/account']
    }
    if(this.message === 'Mis Transferencias'){
      this.router = ['/transfer']
    }
    if(this.message === 'Mis Depositos'){
      this.router = ['/deposit']
    }
    this.changeRouter.emit(this.router);
  }
}
