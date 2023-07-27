import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private logger:LoggerService,private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isRegistered=this.logger.isRegistered;
    if (isRegistered) {
      return true;
    } else {
      this.router.navigate(['/registration']);
      return false;
    }
  }
}
