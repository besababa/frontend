import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppEvent, EventsService } from 'shared/services/events.service';


@Component({
  selector: 'main-event',
  templateUrl: './main-event.component.html',
  styleUrls: ['./main-event.component.css']
})
export class MainEventComponent implements OnInit {

  public event_id:number;
  public event:AppEvent;
 
  constructor(public eventService: EventsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.eventService.header_title = 'Event';

    this.activatedRoute.paramMap.subscribe(params=>{
      
      this.event_id = + params.get('event_id');

      this.eventService.getOne(this.event_id)
      .subscribe((event:AppEvent)=>{
           
        this.event = event;

      }, error=>{

        console.log(error)
      })
    

    })
    
  }

 
   
    
}


