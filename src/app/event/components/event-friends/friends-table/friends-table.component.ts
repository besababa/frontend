import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FriendsTableDataSource } from './friends-table-datasource';
import { AppEventFriend , EventsService} from 'shared/services/events.service';

@Component({
  selector: 'friends-table',
  templateUrl: './friends-table.component.html',
  styleUrls: ['./friends-table.component.css'],
  inputs: ['event_id']
})
export class FriendsTableComponent implements OnInit {
  private event_id ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FriendsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'name','email','status','permission'];
  constructor(private eventService: EventsService) {}

  ngOnInit() {

    this.eventService.getEventFriends(this.event_id )
    .subscribe((friends:AppEventFriend[])=>{
       
        this.dataSource = new FriendsTableDataSource(this.paginator, this.sort,friends);
        console.log(friends)
    });

    
  }
}
