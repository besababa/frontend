import { Component, OnInit } from '@angular/core';
import { EventsService } from 'shared/services/events.service';

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css']
})
export class NewAppComponent implements OnInit {

  public apps;
  constructor(private eventService: EventsService) { }

  ngOnInit() {

    this.eventService.header_title = 'Create new app';

    this.eventService.getApps()
      .subscribe((apps) => this.apps = apps);

  }

}
