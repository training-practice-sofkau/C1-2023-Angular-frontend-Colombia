import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/authentication/services/auth/auth.service';
import { UserService } from 'src/app/modules/user/services/user-profile/user.service';

@Component({
  selector: 'app-landing-pge',
  templateUrl: './landing-pge.component.html',
  styleUrls: ['./landing-pge.component.scss']
})
export class LandingPgeComponent {
  st: any
  routeProfile: string[]

  constructor(private readonly user$: UserService, private readonly authService: AuthService,
    private router: Router) {
    this.st = undefined
    this.routeProfile = ['/profile/p']

  }

  ngOnInit(): void {

  this.user$.getAll().subscribe({
    next: data => console.log('DATA ', data),
    error: err => console.log(err),
    complete: () => console.log('complete')
  });
  //console.log('AQUI')
  //console.log('this.authService.state()', this.authService.state())
  //this.st = this.authService.state()

  }


  otra(){
    this.router.navigate(['profile', 'p']);
  }

  s(){
    console.log('THIS', this.st)
  }
}
