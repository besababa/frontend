import { Component, OnInit, ViewChild , Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { FriendsDataSource } from './friends-datasource';
import { EditFriendComponent } from './edit-friend/edit-friends.component';
import { AppEventFriend, EventsService, AppEvent } from 'shared/services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-friends',
  templateUrl: './event-freinds.component.html',
  styleUrls: ['./event-freinds.component.css']
  
 
})

export class EventFreindsComponent implements OnInit {

  duplicateFriend;
  public event_id;
  public shareUrl;
  public event:AppEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  constructor(
    public dialog: MatDialog,
    private eventService:EventsService,
    private activatedRoute: ActivatedRoute
    ) {}

  dataSource: FriendsDataSource;;
 
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['num', 'name','email','status'];

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe( params => {
    
      this.event_id = params.get('event_id');
    
      this.eventService.getEventFriends(this.event_id )
      .subscribe((friends:AppEventFriend[])=>{
        this.dataSource = new FriendsDataSource(this.paginator, this.sort, friends);
      });
    });
   
  }


  editFriend(friend): void {

    const dialogRef = this.dialog.open(EditFriendComponent, {
      width: '90%',
      data: friend
    });

    dialogRef.afterClosed().subscribe(result => {
     
      friend = result;
    });
  }
  
}
