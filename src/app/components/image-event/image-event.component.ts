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
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMcWK9DGlbfJE7ZJG7Y8-tgNrF2LTW_BrJI1hTDZtasEbcEr3' ,alt_image:'image'},
    {url: 'http://kingpinsalley.com/wp-content/uploads/2013/08/adult_birthday_party.jpg' ,alt_image:'image'},
    {url: 'https://www.londonpartyboats.co.uk/content/panels/riverboat-party-tickets-300-5.jpg?cb=' ,alt_image:'image'},
    {url: 'https://i.pinimg.com/736x/40/f6/ec/40f6ec15ddfcc3a7b792212e157c545e--romantic-evening-a-romantic.jpg' ,alt_image:'image'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHk2eMBG6LZeShMZJYV6_OSH5DYoTk3MJC1oMYX8bFrKrqCia' ,alt_image:'image'},
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

    let title = this.event.title
   
    title = title.replace(" Day", "");

    const searchTitle = {title:title};

    this.eventService.getEventImages(searchTitle)
    .subscribe(result =>{

      if(result['images'] && result['images'].length>0)
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
   
   this.event.image = image.url;

   this.eventService.setEvent(this.event);

   this.router.navigate(['event/info']);


  //  this.eventService.update( this.event._id, this.event)
  //  .subscribe((event:AppEvent) => { 
     
  //     if (event._id){
         
  //        this.router.navigate(['event/info']);
  //      }

  //    },error=>{

  //      this.router.navigate(['event/info']);
  //      this.error = 'Server Error'; 
  //    });
  }


}
