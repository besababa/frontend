import { Component, OnInit } from '@angular/core';
import { EventsService, AppEvent } from 'shared/services/events.service';
import { BsAuthService } from 'shared/services/bs.auth.service';

@Component({
  selector: 'display-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  inputs: ['user_id'],
})

export class EventsComponent implements OnInit {
  
  public events:any[]; 
  private user_id;
  constructor(private eventService: EventsService, public authService:BsAuthService) {}

  ngOnInit(){

    if(this.authService.getToken()){

      this.eventService.getEventsUser()
      .subscribe((events:AppEvent[]) => {
        console.log(events);
        this.events = events
      })
    }
   
    
  }
 
}
