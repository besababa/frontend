import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment.prod';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class EventsService extends DataService{

  constructor( http : HttpClient) { 
    
    super(environment.api_url+'/events',http);
  }
  

  uploadEventImage(file):Observable<AppEventImage>{

    return this.http.post<AppEventImage>(this.url+'/upload/event-image',file)
      .catch(this.handelError);
  }
  getEventTitles():Observable<any>{

    return this.http.get<any>(this.url+'/titles') 
    .catch(this.handelError)
    .pipe( map( result => {
     
        if(result.event_id){  
          localStorage.setItem('event_id',result.event_id)
        }
    }));
  }

  getEventImages():Observable<AppEventImage[]>{

    return this.http.get<AppEventImage[]>(this.url+'/images')
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
    return localStorage.getItem('event_id');
  }

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
  id:any;
  published: boolean;
  image: string;
  end_date:string;
  start_date:string;
  title: string;
  alt_image: string;
  description:string;
}
export interface AppEventTitle{
  title:string;
}
export interface AppEventImage{
  url:string;
  alt_image:string;
}


