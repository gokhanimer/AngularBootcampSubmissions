import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrganicrouteService {

  constructor(private router : Router){}
openLogin(){
  this.router.navigate(['login'])
}
           
openDashboard(){
  this.router.navigate(['dashboard'])
}
  
openHome(){
  this.router.navigate(['home'])
}

}
