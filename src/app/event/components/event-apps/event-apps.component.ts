import { Component, OnInit } from '@angular/core';
import { EventsService } from 'shared/services/events.service';

@Component({
  selector: 'event-apps',
  templateUrl: './event-apps.component.html',
  styleUrls: ['./event-apps.component.css']
})
export class EventAppsComponent implements OnInit {

  constructor(private eventService: EventsService) { }
  public event_id
  ngOnInit() {

    this.event_id = this.eventService.event_id;
    this.eventService.header_title = 'Apps';

  }

}
