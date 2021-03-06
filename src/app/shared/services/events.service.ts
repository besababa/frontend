import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})


export class EventsService extends DataService{
  public eventImage;
  private event:AppEvent;
  public event_id;
  public header_title:string="Event";
  constructor( http : HttpClient, router:Router){ 
    
    super(environment.api_url+'/events',http,router);
  }

  isEvent(){
    
   return (this.event_id>0)

  }

  getEventsUser(){

    return this.http.get(this.url+"/user")
    .catch(this.handelError);

  }


  getEventApps(event_id){

    return this.http.get(this.url+"/"+event_id+"/apps")
    .catch(this.handelError);

  }

  getApps(){
    return this.http.get(this.url+"/apps")
    .catch(this.handelError);

  }
  setEvent(event){
    this.event = event
  }
  getEvent(){


    if(!this.event){
      this.router.navigate(['/']);
    }
    return this.event;
  }

  updateEvent(resource){

    return this.http.post(this.url+"/update",resource)
      .catch(this.handelError);

  }
  
  createEvent(resource){

    return this.http.post(this.url,resource)
    .pipe( map( result => {
      if(result && result['token']){
        localStorage.setItem('token',result['token'])
      }

      return result['event'];

    }))
    .catch(this.handelError);
  }

  getNotifications(event_id){

    return this.http.get(this.url+'/'+event_id+'/notifications')
      .catch(this.handelError);
  }

  uploadEventTempImage(file){

    return this.http.post(this.url+'/upload/event-image',file)
    .pipe( map( result => {
      result['alt_image'] = 'new event image';
      return result;
    })).catch(this.handelError);
  }
  uploadEventImage(event_id,file){
    
    return this.http.post(this.url+'/update/event-image/'+event_id,file)
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

  getEventFriends<AppEventFriend>(event_id){
    return this.http.get(this.url+"/"+event_id+"/friends")
      .catch(this.handelError);
  }

  getEventSupplies(event_id){

    return this.http.get(this.url+"/"+event_id+"/supply")
      .catch(this.handelError);
  }
  getEventId(){
  
    return (this.event)? this.event.id:null;
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
    status:number;
    permission:number;
   
  
}

export interface AppEvent {
  id:any;
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



