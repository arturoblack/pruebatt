import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class IsBossGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    if (user) {
      if (user.rol === 'BOSS') {
        return true;
      }
    }
    this.router.navigate(['/', 'auth', 'login']);
  }
}
