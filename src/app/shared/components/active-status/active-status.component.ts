import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'active-status',
  templateUrl: './active-status.component.html',
  styleUrls: ['./active-status.component.css'],
  inputs: ['status']
})
export class ActiveStatusComponent {
  status:boolean;
  constructor() {

  
   }

}
