import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service' 
import { AppEvent, EventsService } from '../../services/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  public avatar:string="assets/images/avatar.jpeg";
  public event:AppEvent;
  constructor( public auth: AuthService,eventService:EventsService) {

    this.event = eventService.getEvent();
  }

 

}
