import { Component } from '@angular/core';
import { RoutingState } from './helpers/RoutingState';
import { EventsService } from './services/events.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public RoutingState:RoutingState,public eventService:EventsService){}
  

}