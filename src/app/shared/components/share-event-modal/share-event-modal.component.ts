import { Component, OnInit } from '@angular/core';
import {NgbActiveModal,  NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';
import { AppEvent } from 'shared/services/events.service';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'share-event-modal',
  templateUrl: './share-event-modal.component.html',
  styleUrls: ['./share-event-modal.component.css'],
  providers: [NgbActiveModal, NgbModal],
  inputs:['event']

})
export class ShareEventModalComponent implements OnInit{

  loading:boolean;
  private modalRef: NgbModalRef;
  private closeResult;
  event:AppEvent;
  url:string;
  title:string;
  message:string="Share your event with friends"

  constructor(
     private active: NgbActiveModal,
     private modalService: NgbModal,
     private location : Location,
     

  ) {
  
  }

  ngOnInit(){

    this.url = environment.api_url+this.location.path();
    this.title = "Please come to my event";
  }
  open(content) {
    this.modalRef = this.modalService.open(content);
    
  }


}
