import { Component, OnInit } from '@angular/core';
import { AppEventFriend, EventsService } from 'shared/services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-friends',
  templateUrl: './event-freinds.component.html',
  styleUrls: ['./event-freinds.component.css']
  
 
})

export class EventFreindsComponent implements OnInit {
  
  event_id
  constructor(private eventService: EventsService,private activatedRoute:ActivatedRoute ) {}

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe( params => {
    
      this.event_id = params.get('event_id');
    
      this.eventService.getEventFriends(this.event_id )
      .subscribe((friends:AppEventFriend[])=>{
          console.log(friends)
      });
    });
   
  }
  
}
