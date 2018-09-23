import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { BsAuthService } from 'shared/services/bs.auth.service';
import { Observable } from 'rxjs';
import { EventsService } from 'shared/services/events.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: BsAuthService,public eventService: EventsService) {
     
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.auth.getToken();
    if (token) {
      request = request.clone({ setHeaders: { 'Authorization': 'Bearer ' + token }});
    }

    let event_id = this.eventService.getEventId()
    if(event_id){
      request = request.clone({ setHeaders:{'event_id': event_id} });
    }

    return next.handle(request);
  }
}