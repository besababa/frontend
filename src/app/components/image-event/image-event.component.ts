import { Component, OnInit, ViewChild } from '@angular/core';
import { EventsService, AppEvent } from '../../services/events.service';
import {NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { NotFoundError } from '../../common/not-found-error';
import { BadINput } from '../../common/bad-input';
import { AppError } from '../../common/app-error';

@Component({
  selector: 'image-event',
  templateUrl: './image-event.component.html',
  styleUrls: ['./image-event.component.css']
})
export class ImageEventComponent implements OnInit {
  
  @ViewChild('myCarousel') myCarousel: NgbCarousel;

  index;
  error:string;
  event:AppEvent;
  public images = [ 
    'https://placeimg.com/300/300/nature/6',
    'https://placeimg.com/300/300/nature/7',
    'https://placeimg.com/300/300/nature/8',
    'https://placeimg.com/300/300/nature/9',
    'https://placeimg.com/300/300/nature/2',
    'https://placeimg.com/300/300/nature/3',
    'https://placeimg.com/300/300/nature/1',
  ];

  constructor(
    private eventService: EventsService,
    private config: NgbCarouselConfig,
    private router: Router, 
  
  ) {

    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.interval=0;
   }
  
  
  
  ngOnInit() {

    this.event = this.eventService.getEvent();

    

    const title = {title:this.event.title};

    console.log(title);
    this.eventService.getEventImages(title)
    .subscribe(result =>{
      console.log(result['images'])
      
      this.images = result['images']
    })

  }

  uploadImage(event){

    let image = event.target.files[0];
   
    this.error = null;

    if((image.type=='image/jpeg' || image.type=='image/png') && image.size<400000){
     
      let formData:FormData = new FormData();
      formData.append('eventImage', image, image.name);
  
      this.eventService.uploadEventImage(formData).subscribe(result=>{

        this.images.splice(parseInt(this.myCarousel.activeId),0,result['image'])
       
      },(error:AppError)=>{
       
       if(error instanceof NotFoundError){

         this.error= 'Event not found'
        
        }else if(error instanceof BadINput){
 
          this.error = 'The image must be of the type jpeg/png and max size of 5Mb';
        
        }else throw error
       

      })
    }
  }

  
  saveImage(){

    this.event.image = this.images[this.myCarousel.activeId];

   this.eventService.update( this.event._id, this.event)
   .subscribe((event:AppEvent) => { 
     
      if (event._id){
         this.eventService.setEvent(event);
         this.router.navigate(['event/info']);
       }

     },error=>{

       this.router.navigate(['event/info']);
       this.error = 'Server Error'; 
     });
  }


}
