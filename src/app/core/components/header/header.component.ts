import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd, ActivatedRoute } from '@angular/router';
import { BsAuthService } from 'shared/services/bs.auth.service' 
import { AppEvent, EventsService } from 'shared/services/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public avatar:string="assets/images/avatar.jpeg";
  public event_id:number;
  constructor( public auth: BsAuthService,public eventService:EventsService) {
   
  }

  ngOnInit() {
    
  }

 

}
