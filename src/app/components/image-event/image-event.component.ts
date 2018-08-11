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
 
  public images = [ 
   {url: 'https://placeimg.com/300/300/nature/6',alt_image:'first'},
   {url:'https://placeimg.com/300/300/nature/7',alt_image:'first'},
   {url: 'https://placeimg.com/300/300/nature/8',alt_image:'first'},
   {url: 'https://placeimg.com/300/300/nature/9',alt_image:'first'},
   {url: 'https://placeimg.com/300/300/nature/2',alt_image:'first'},
   {url: 'https://placeimg.com/300/300/nature/3',alt_image:'first'},
   {url: 'https://placeimg.com/300/300/nature/1',alt_image:'first'},
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

    this.eventService.getEventImages()
    .subscribe(images =>this.images = images)

  }

  uploadImage(event){

    let image = event.target.files[0];
   
    this.error = null;

    if((image.type=='image/jpeg' || image.type=='image/png') && image.size<400000){

      this.eventService.uploadEventImage(image).subscribe(image=>{

        this.images.splice(parseInt(this.myCarousel.activeId),0,image)
       
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

    
    let image = this.images[this.myCarousel.activeId];

   
   let event_id = this.eventService.getEventId();
   this.eventService.update(event_id,image)
   .subscribe((event:AppEvent) => { 
     
      if (event.id){
         this.router.navigate(['event/info']);
       }

     },error=>{

       this.router.navigate(['event/info']);
       this.error = 'Server Error'; 
     });
  }


}
