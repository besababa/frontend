import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EventsService, AppEvent } from '../../services/events.service';

@Component({
  selector: 'event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.css'],
  inputs:['event_id']
})
export class EventHeaderComponent implements OnInit {

  @Input() event_id:number;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    
  }

}
