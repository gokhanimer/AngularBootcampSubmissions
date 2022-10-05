import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrganicrouteService } from 'src/app/services/organicroute.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  constructor(private route : OrganicrouteService)
  {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
     const flag=sessionStorage.getItem("loggedin");

      if(flag!="true")
      {
      this.route.openLogin();   
  return false;
      }
  
    return true;
    }
}
