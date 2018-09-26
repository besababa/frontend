import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AppEvent, EventsService } from 'shared/services/events.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'share-event-modal',
  templateUrl: './share-event-modal.component.html',
  styleUrls: ['./share-event-modal.component.css'],
  providers: [NgbActiveModal, NgbModal],
  inputs: ['event_id']
  
})
export class ShareEventModalComponent implements OnInit{

  @Input() event_id;
  public loading:boolean=false;
  private modalRef: NgbModalRef;
  private closeResult;
  public event:AppEvent;
  public shareUrl:string;
  public message:string="Share your event with friends";

  constructor( private modalService: NgbModal, private eventService:EventsService ) { }

  ngOnInit(){
    this.shareUrl = environment.base_url+"/event/"+this.event_id+"/home";
    
    this.eventService.getOne(this.event_id)
      .subscribe((event:AppEvent)=>{
        
        this.event = event;
        
        this.loading = true;
        console.log(this.event)
      }, error=>{
        console.log(error)
      })
    
    
  }
  open(content) {
    if(!this.loading)return false
    this.modalRef = this.modalService.open(content);
    
  }


}
