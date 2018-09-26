import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'friend-roles',
  templateUrl: './friend-roles.component.html',
  styleUrls: ['./friend-roles.component.css'],
  inputs: ['roles']
})
export class FriendRolesComponent implements OnInit {
  roles:[number];

  role_list = ['fa fa-eye','fa fa-edit','fa fa-plus-circle'];
  constructor() { }

  ngOnInit() {



  }

}
