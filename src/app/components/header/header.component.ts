import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service' 
import { AppEvent, EventsService } from '../../services/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public avatar:string="assets/images/avatar.jpeg";
  public event_id:number;
  constructor( public auth: AuthService,public eventService:EventsService) {
   
  }

  ngOnInit() {
    
  }

 

}
