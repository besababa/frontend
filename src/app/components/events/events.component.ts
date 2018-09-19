import { Component, OnInit } from '@angular/core';
import { EventsService, AppEvent } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  inputs: ['user_id'],
})

export class EventsComponent implements OnInit {
  
  public events:any[]; 
  private user_id;
  constructor(private eventService: EventsService) {}

  ngOnInit(){
console.log(999)
    this.eventService.getEventsUser()
      .subscribe((events:AppEvent[]) => this.events = events)
    
  }
 
}
