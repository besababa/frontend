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
  public userFriends;
  formGroup = new FormGroup({
    name : new FormControl('', [
      Validators.required
    
    ]),
    email : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone : new FormControl('', [
      Validators.required
    ]),

  })
  constructor(public eventService : EventsService) {}

  ngOnInit() {



  }

  get name(): any { return this.formGroup.get('name'); }
  get email(): any { return this.formGroup.get('email'); }
  get phone(): any { return this.formGroup.get('phone'); }
  
  

 
  addFriend(){

    if(this.formGroup.invalid) return false;

    let friend = this.formGroup.value;

    friend.status = 0;
    friend.roles = 0
    
    this.add.emit(this.formGroup.value);
    
    this.newFrienForm.resetForm();
    
   
    
  }

 
}
