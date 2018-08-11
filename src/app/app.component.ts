import { Component } from '@angular/core';
import { RoutingState } from './helpers/RoutingState';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public RoutingState:RoutingState){}
  

}