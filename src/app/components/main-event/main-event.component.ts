import { Component, OnInit } from '@angular/core';
import { EventsService, AppEvent, AppImage } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadInput } from '../../common/bad-input';


@Component({
  selector: 'main-event',
  templateUrl: './main-event.component.html',
  styleUrls: ['./main-event.component.css']
})
export class MainEventComponent implements OnInit {

  public event:AppEvent;
 
  constructor(public eventService: EventsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let event_id = this.eventService.event_id;

    this.eventService.getOne(event_id)
      .subscribe((event:AppEvent)=>{
    
        this.event = event;
        console.log(event)

      }, error=>{

        console.log(error)
      })
    
  }

 
   
    
}


