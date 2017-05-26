import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Injectable()

export class AuthManager implements CanActivate{
    constructor(private router: Router){

    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(Cookie.get('auth_key'))
        {

       // console.log(window.localStorage.getItem('auth_key'));
          return true;
        }
      else{
        console.log('you must be loggef in');
        this.router.navigate(['/']);
        return false;
      }

    }
}
