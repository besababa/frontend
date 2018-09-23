import { Component, OnInit } from '@angular/core';
import { BsAuthService } from 'shared/services/bs.auth.service';

@Component({
  selector: 'new-event-btn',
  templateUrl: './new-event-btn.component.html',
  styleUrls: ['./new-event-btn.component.css']
})
export class NewEventBtnComponent implements OnInit {

  constructor(public auth:BsAuthService) { }

  ngOnInit() {
  }

}
