import { Component, OnInit , Input } from '@angular/core';
import { AppEvent } from '../../services/events.service';



@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
  inputs:['event']
})


export class EventCardComponent implements OnInit {

  @Input() event:AppEvent
  constructor() { }

  ngOnInit() {
  }

  showEvent(){

    
    console.log('onClick')

  }

}
