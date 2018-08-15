import { Component, OnInit } from '@angular/core';
import { EventsService, AppEventTitle, AppEvent } from '../../services/events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { NotFoundError } from '../../common/not-found-error';

@Component({
  selector: 'title-event',
  templateUrl: './title-event.component.html',
  styleUrls: ['./title-event.component.css']
})
export class TitleEventComponent implements OnInit {

  constructor(
    public eventService: EventsService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  titleControl = new FormControl();
  title=this.titleControl.value;
  titles: string[];
  invalidEvent:boolean;

  ngOnInit() {

    this.eventService.getEventTitles()
    .subscribe(
      result =>{

      this.titles = result.titles;

    },error=>{

      this.titles= ['Best Event', 'The Event Of The Year', 'My Birth Day'];

      if(error instanceof NotFoundError){

        console.log('not found error');
        
      }else throw error;
        
    })
  }

  get placeholder(){

    return (this.titleControl.value)?'Your title is':this.titles[0];
  }
  saveTitle(e){

    let title = (this.titleControl.value)?this.titleControl.value:this.placeholder;

    this.eventService.create({title:title})
    .subscribe(result => { 
     
       if (result['event']){

          this.eventService.setEvent(result['event']);
         
          this.router.navigate(['event/image']);

        } else this.invalidEvent = true;

      },error=>{
        this.router.navigate(['event/image']);
        this.invalidEvent = true; 
      });
    

  }




  

}
