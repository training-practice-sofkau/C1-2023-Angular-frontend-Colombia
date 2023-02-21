import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  authentication: boolean
  nameUser: string

  constructor(){
    this.authentication = false
    this.nameUser = ''
  }

  ngOnInit(): void {
    const myObjectString = localStorage.getItem('user');
    const user = JSON.parse(myObjectString ? myObjectString : '');
    if(myObjectString){
      this.authentication = true
      this.nameUser = user?.displayName
    }
  
    }

}
