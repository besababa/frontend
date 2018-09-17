import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppEvent, EventsService, AppImage } from '../../services/events.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadInput } from '../../common/bad-input';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  
})
export class EventComponent implements OnInit {

  constructor(public eventService: EventsService,private activatedRoute: ActivatedRoute) {}
  public event_id:number;
  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params=>{
     
      this.event_id = + params.get('event_id');
      this.eventService.event_id = this.event_id;
  
    })
    
  }
  

  


}
