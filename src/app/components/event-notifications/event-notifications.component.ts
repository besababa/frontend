import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-notifications',
  templateUrl: './event-notifications.component.html',
  styleUrls: ['./event-notifications.component.css'],
})
export class EventNotificationsComponent implements OnInit {
  notifications:any;
  constructor(private eventService: EventsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(parmas => {
      if(parmas.has('event_id')){


       
        this.eventService.getNotifications(parmas.has('event_id'))
        .subscribe(result=>{

          console.log(result)

        }, error=>{


         
          console.log(error)
        })
       
      }
    });
   

  }

}
