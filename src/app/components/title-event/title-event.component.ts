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
  titles: string[] = ['Best Event', 'The Event Of The Year', 'My Birth Day'];


  invalidEvent:boolean;

  ngOnInit() {

    this.eventService.getEventTitles()
    .subscribe(
      titles =>{

      this.titles = titles;

    },error=>{

      if(error instanceof NotFoundError){
        console.log('not found error');
      }else throw error;
        
    })
  }

  get placeholder(){

    return (this.titleControl.value)?'Your title is':this.titles[0];
  }
  saveTitle(){

    let title = (this.titleControl.value)?this.titleControl.value:this.placeholder;

    this.eventService.create({title:title})
    .subscribe((event:AppEvent) => { 
       console.log(event)
      
       if (event.id){
          localStorage.setItem('event_id',event.id)
          this.router.navigate(['event/image']);

        } else this.invalidEvent = true;

      },error=>{
        this.router.navigate(['event/image']);
        this.invalidEvent = true; 
      });
    

  }




  

}
