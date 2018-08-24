import { Component, OnInit } from '@angular/core';
import { EventsService, AppEvent } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-event',
  templateUrl: './main-event.component.html',
  styleUrls: ['./main-event.component.css']
})
export class MainEventComponent implements OnInit {

  event:AppEvent;
 
  constructor(public eventService: EventsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(parmas => {
      if(parmas.has('event_id')){

        this.eventService.getOne(parmas.get('event_id'))
        .subscribe((event:AppEvent)=>{

          let tempEvent = this.eventService.getEvent();
            console.log(event);
            console.log(tempEvent)
          this.event = (event)? event: tempEvent;
        
        }, error=>{
  
          console.log(error)
        })
       
      }
    });
  }
   
    
}


