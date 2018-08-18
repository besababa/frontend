import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-notifications',
  templateUrl: './event-notifications.component.html',
  styleUrls: ['./event-notifications.component.css'],
  inputs:['event_id']
})
export class EventNotificationsComponent implements OnInit {
  notifications:any;
  event_id;
  constructor(private eventService: EventsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.eventService.getNotifications(this.event_id)
    .subscribe(result=>{

      console.log(result)

    }, error=>{
      
      console.log(error)
    })
       
     
   

  }

}
