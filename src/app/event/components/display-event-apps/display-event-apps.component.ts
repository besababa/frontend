import { Component, OnInit } from '@angular/core';
import { EventsService } from 'shared/services/events.service';

@Component({
  selector: 'display-event-apps',
  templateUrl: './display-event-apps.component.html',
  styleUrls: ['./display-event-apps.component.css'],
  inputs:['event_id']
})
export class DisplayEventAppsComponent implements OnInit {

  public event_id:number;
  public event_apps;
  constructor(private eventService: EventsService) { }

  ngOnInit() {

    this.eventService.getEventApps(this.event_id) 
    .subscribe((event_apps) => this.event_apps = event_apps);
  
  }

}
