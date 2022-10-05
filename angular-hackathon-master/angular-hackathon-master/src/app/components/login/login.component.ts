import { Component, OnInit } from '@angular/core';
import { OrganicrouteService } from 'src/app/services/organicroute.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name : string="";
  password : string="";

  constructor(private route : OrganicrouteService) { }

  ngOnInit(): void {
  }
  signIn()
  {
    if((this.name=="admin") && (this.password=="password123"))
    {
      sessionStorage.setItem("loggedin", "true");
      this.route.openHome();
    }
  }

}
