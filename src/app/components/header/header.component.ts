import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service' 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  public avatar:string="assets/images/avatar.jpeg";
  
  constructor( public auth: AuthService) {}

 

}
