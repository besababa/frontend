import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { environment } from './../../environments/environment.prod';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class EventsService extends DataService{

  private event:AppEvent;
 
  constructor( http : HttpClient, router:Router){ 
    
    super(environment.api_url+'/events',http,router);
  }
  setEvent(event){
    this.event = event
  }
  getEvent(){


    if(!this.event){
      this.router.navigate(['/']);
    }
    stop;
    return this.event;
  }
  
  getNotifications(event_id){

    return this.http.get(this.url+'/'+event_id+'/notifications')
      .catch(this.handelError);
  }

  uploadEventImage(file){
    
    return this.http.post(this.url+'/upload/event-image',file)
    .pipe( map( result => {
      result['alt_image'] = 'new event image';
      return result;

    }))
      .catch(this.handelError);
  }
  getEventTitles():Observable<any>{

    return this.http.get<any>(this.url+'/titles') 
    .catch(this.handelError);
   
  }

  getEventImages(title):Observable<string[]>{

    return this.http.post<string[]>(this.url+'/images',title)
      .catch(this.handelError);

  }

  getEventFriends<AppEventFriend>(id){

    return this.http.get(this.url+'/friends/'+id)
      .catch(this.handelError);
  }

  getEventSupplys<AppEventSupply>(id){
    return this.http.get(this.url+'/supplys/'+id)
      .catch(this.handelError);
  }

  getEventId(){
  
    return (this.event)? this.event._id:null;
  }

}    

export interface AppImage{
  url:string;
  alt_image:string;
}
  
export interface AppWhoBrings{
  friend_id:number;
  amount:number;
}
export interface AppEventSupply {
  title: string;
  amount: number;
  confirmed: number;
  who_brings:AppWhoBrings[];
}

export interface AppEventFriend{
    id: number;
    name: string;
    email: string;
    phone: string;
    status:number;
    admin: boolean;
    disabled:boolean;
    color:string;
  
}

export interface AppEvent {
  _id:any;
  published: boolean;
  image: string;
  end_date:string;
  start_date:string;
  title: string;
  description:string;
}
export interface AppEventTitle{
  title:string;
}



