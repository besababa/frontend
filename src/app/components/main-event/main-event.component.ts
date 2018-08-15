import { Component, OnInit } from '@angular/core';
import { EventsService, AppEvent } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-event',
  templateUrl: './main-event.component.html',
  styleUrls: ['./main-event.component.css']
})
export class MainEventComponent implements OnInit {

  event:any= {
    _id:3409583098,
    published: false,
    image:'assets/images/party.jpeg',
    end_date:'09/15/2018',
    start_date:'09/14/2018',
    title: 'The best party',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  
  constructor(public eventService: EventsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(parmas => {
      if(parmas.has('event_id')){

        console.log(parmas.get('event_id'))
        this.eventService.getOne(parmas.get('event_id'))
        .subscribe(event=>{

          this.event.title= event['title'];
          console.log( this.event)

        }, error=>{


         
          console.log(error)
        })
       
      }
    });
  }
   
    
}


