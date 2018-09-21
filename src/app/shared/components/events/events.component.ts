import { Component, OnInit } from '@angular/core';
import { EventsService, AppEvent } from 'shared/services/events.service';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'display-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  inputs: ['user_id'],
})

export class EventsComponent implements OnInit {
  
  public events:any[]; 
  private user_id;
  constructor(private eventService: EventsService, private authService:AuthService) {}

  ngOnInit(){

    if(this.authService.getToken()){

      this.eventService.getEventsUser()
      .subscribe((events:AppEvent[]) => {

        console.log(event)
        this.events = events
      })
    }
   
    
  }
 
}
