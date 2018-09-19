import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppEventFriend } from '../../../services/events.service';


@Component({
  selector: 'edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.css']
})

export class EditFriendComponent {

  constructor(
    public dialogRef: MatDialogRef<EditFriendComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AppEventFriend) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
