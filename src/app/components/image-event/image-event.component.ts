import { Component, OnInit, ViewChild } from '@angular/core';
import { EventsService, AppEvent, AppImage } from '../../services/events.service';
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
   {url: 'https://placeimg.com/300/300/nature/1' ,alt_image:'image'},
   {url: 'https://placeimg.com/300/300/nature/2' ,alt_image:'image'},
   {url: 'https://placeimg.com/300/300/nature/3' ,alt_image:'image'},
   {url: 'https://placeimg.com/300/300/nature/4' ,alt_image:'image'},
   {url: 'https://placeimg.com/300/300/nature/5' ,alt_image:'image'},
   {url: 'https://placeimg.com/300/300/nature/6' ,alt_image:'image'},
   {url: 'https://placeimg.com/300/300/nature/7' ,alt_image:'image'},
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

    if(!this.event) return false;
    const title = {title:this.event.title};

    console.log(title);
    this.eventService.getEventImages(title)
    .subscribe(result =>{
      
      if(result['images'] && result['images'].length)
        this.images = result['images']
    })

  }

  uploadImage(event){

    let image = event.target.files[0];
   
    this.error = null;

    if((image.type=='image/jpeg' || image.type=='image/png') && image.size<400000){
     
      let formData:FormData = new FormData();
      formData.append('eventImage', image, image.name);
  
      this.eventService.uploadEventImage(formData).subscribe((result:AppImage)=>{

        this.images.splice(parseInt(this.myCarousel.activeId),0,result)
       
      },(error:AppError)=>{
       
       if(error instanceof NotFoundError){

         this.error= 'Event not found'
        
        }else if(error instanceof BadINput){
 
          this.error = 'The image must be of the type jpeg/png and max size of 5Mb';
        
        }else throw error
       

      })
    }
  }

  
  saveImage(e){

   let image = this.images[this.myCarousel.activeId];
   console.log(image)
   console.log(image.url)

   this.event.image = image.url;
   console.log(this.event)
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
