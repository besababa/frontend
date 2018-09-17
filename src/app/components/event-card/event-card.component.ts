import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppEvent, EventsService, AppImage } from '../../services/events.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadInput } from '../../common/bad-input';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
  inputs:['event','editing']
})
export class EventCardComponent implements OnInit {

  @Input() event:AppEvent
  @Input() editing:boolean
  public eventImageError:string;

  constructor(public eventService: EventsService,private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  get isEditing(){
    return this.editing===false
  }
  uploadImage(event){

    if(this.editing===false) return false;

    let image = event.target.files[0];
   
    this.eventImageError = null;

    if((image.type=='image/jpeg' || image.type=='image/png')){
     
      let formData:FormData = new FormData();
      formData.append('eventImage', image, image.name);
  
      this.eventService.uploadEventImage(formData).subscribe((result:AppImage)=>{

        this.event.image = result.url;
       
      },(error:AppError)=>{
       
       if(error instanceof NotFoundError){

         this.eventImageError= 'Event not found'
        
        }else if(error instanceof BadInput){
 
          this.eventImageError = 'The image must be of the type jpeg/png and max size of 5Mb';
        
        }else throw error
       

      })
    }else{
      this.eventImageError = "You can upload jpeg or png only"
    }
  }


}
