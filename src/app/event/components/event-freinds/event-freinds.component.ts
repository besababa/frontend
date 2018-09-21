import { Component, OnInit, ViewChild , Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FriendsDataSource } from './friends-datasource';
import { EditFriendComponent } from './edit-friend/edit-friends.component';
import { AppEventFriend, EventsService } from 'shared/services/events.service';

@Component({
  selector: 'event-friends',
  templateUrl: './event-freinds.component.html',
  styleUrls: ['./event-freinds.component.css'],
  inputs: ['event_id'],
 
})

export class EventFreindsComponent implements OnInit {

  duplicateFriend;
  friends:AppEventFriend[]
  event_id;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output() addNewFriend = new EventEmitter();
 
  constructor(public dialog: MatDialog,private eventService:EventsService) {}



  dataSource: FriendsDataSource;
 
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['num', 'name','email','phone','status'];

  ngOnInit() {
    
    if(this.event_id){
      this.eventService.getEventFriends( this.event_id )
      .subscribe(response=>{
        console.log('event-friends' ,response)
        this.friends = response['friends'];
        this.dataSource = new FriendsDataSource(this.paginator, this.sort, this.friends);
      })
    }
   
  }

  addFriend(friend){
  
    let check = this.friends.find(function(element) {
      return element.email === friend.email;
    })

    console.log(typeof check)
    if(typeof check != 'undefined'){
      
      this.duplicateFriend = friend;

      return false;
    }
    this.friends.splice(0,0,friend);

    this.dataSource = new FriendsDataSource(this.paginator, this.sort, this.friends);;
   
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
