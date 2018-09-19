import { Component, OnInit } from '@angular/core';
import { EventsService, AppEvent } from '../../services/events.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

import * as _moment from 'moment';


 const _rollupMoment = (_moment['default']) ? _moment['default']:null;

const moment = _rollupMoment || _moment;


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'info-event',
  templateUrl: './info-event.component.html',
  styleUrls: ['./info-event.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class InfoEventComponent implements OnInit {

  date = new FormControl(moment());  

  descriptionControl = new FormControl();
  title=this.descriptionControl.value;
  event:AppEvent;
  descriptionPlaceholder:string;
  placheholder:string = "It's going to be the best party of the year";
  emptyDescription="Write some description";
  
  description:string;
  error:string;
  constructor(
    public eventService:EventsService,
    private router: Router,
    private route: ActivatedRoute
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

  saveInfo(){

    this.event.description =(this.descriptionControl.value)? this.descriptionControl.value:this.placheholder;
    this.event.start_date = this.date.value;
    
    this.eventService.updateEvent(this.event)
    .subscribe((event:AppEvent) => { 
      
      this.eventService.setEvent(event);

      this.router.navigate(['/event',event.id,'home']);
        
 
      },error=>{
 
       console.log(error);
        this.error = 'Server Error'; 
      });
    

  }


}
