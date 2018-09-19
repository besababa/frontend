import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EventsService, AppEvent } from '../../services/events.service';

@Component({
  selector: 'event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.css'],
 
})
export class EventHeaderComponent implements OnInit {

  public event_id:number;
  public event:AppEvent;
  constructor(
    public eventService: EventsService,
    public auth: AuthService,
    ) {}

  ngOnInit() {
   
    this.event_id = this.eventService.event_id;

   
    this.eventService.getOne(this.event_id)
      .subscribe((event:AppEvent)=>{
    
        this.event = event;
        console.log(event)

      }, error=>{

        console.log(error)
      })
  }



}
