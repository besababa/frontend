import { Component, Output, EventEmitter, ViewChild, Input, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { EventsService } from 'shared/services/events.service';

@Component({
  selector: 'new-friend',
  templateUrl: './new-friend.component.html',
  styleUrls: ['./new-friend.component.css']

})


export class NewFriendComponent implements OnInit {
  @ViewChild('form') newFrienForm;
  @Output() add = new EventEmitter();
  @Input() public errorDuplicate: any;
  public userFriends=['gonen@buyme.co.il','shlomi@buyme.co.il'];
  formGroup = new FormGroup({
  
    email : new FormControl('', [
      Validators.required,
      Validators.email
    ])

  })
  constructor(public eventService : EventsService) {}

  ngOnInit() {

  }
  get email(): any { return this.formGroup.get('email'); }
  
  addFriend(){

    console.log(this.formGroup);
    if(this.formGroup.invalid) return false;

    let friend = this.formGroup.value;

    console.log(friend);
    console.log(999)
    friend.status = 0;
    friend.roles = 0
    
    this.add.emit(this.formGroup.value);
    
    this.newFrienForm.resetForm();
    
   
    
  }

 
}
