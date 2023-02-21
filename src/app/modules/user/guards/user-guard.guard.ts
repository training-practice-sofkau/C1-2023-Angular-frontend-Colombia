import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../authentication/services/auth/auth.service';
import { UserService } from '../services/user-profile/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router, private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const local = localStorage.getItem('token')
      if(!local){
        console.log('IF')
        this.router.navigate(['/'])
        return false
      }else{
        return true;
      }
  }
  
}
