import { Component, OnInit } from '@angular/core';
import { EventsService, AppEvent } from '../../services/events.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'info-event',
  templateUrl: './info-event.component.html',
  styleUrls: ['./info-event.component.css']
})
export class InfoEventComponent implements OnInit {

  descriptionControl = new FormControl();
  startDateControl = new FormControl()
  title=this.descriptionControl.value;
  event:AppEvent;
  descriptionPlaceholder:string;
  placheholder:string = 'Comme to the best event of the year';
  emptyDescription="Write some description";
  start_date;
  description:string;
  error:string;
  constructor(
    public eventService:EventsService,
    private router: Router 
  ) { }

  ngOnInit() {
      this.event = this.eventService.getEvent();
      this.descriptionPlaceholder = this.placheholder;
  }

  focusDescription(){
    this.descriptionPlaceholder=this.emptyDescription 
  }
  blurDescription(){
    if(!this.descriptionControl.value){
      this.descriptionPlaceholder=this.placheholder;
    }
  }
  changeDescription(){

    if(this.descriptionControl.value){
      this.descriptionPlaceholder="Nice work"
    }else{
      this.descriptionPlaceholder=this.emptyDescription;
    }
  }

  saveInfo(e){

    let event_id = this.eventService.getEventId();
    
    let resource = {description:this.descriptionControl.value,start_date:this.startDateControl.value}

    this.eventService.update(event_id,resource)
    .subscribe((event:AppEvent) => { 
      
       if (event._id){
         this.eventService.setEvent(event);
          this.router.navigate(['event/'+event_id]);
        }
 
      },error=>{
 
        this.router.navigate(['event/'+event_id]);
        this.error = 'Server Error'; 
      });
    

  }


}
