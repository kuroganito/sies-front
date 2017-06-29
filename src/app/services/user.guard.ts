import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class UserGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.authService.isLogged().then(isLogged => {
        if (isLogged) {
          resolve(true)
        } else {
          this.router.navigate([''])
          resolve(false)
        }
      }).catch(error => {
        this.router.navigate([''])
        resolve(false)
      })
    })

  }
}
