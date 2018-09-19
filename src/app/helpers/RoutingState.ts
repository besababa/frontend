import { Injectable } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute, ActivationEnd, UrlHandlingStrategy } from "@angular/router";
import { filter } from "rxjs/operators";
import { EventsService } from "../services/events.service";


@Injectable()
export class RoutingState {
  private history = [];
  private add:boolean = true;
  private lastUrl;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventService:EventsService
  ) {}

  public loadRouting(): void {
   

      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
       
        this.setEventId(urlAfterRedirects);
       

        if( this.lastUrl !== urlAfterRedirects){
            this.lastUrl = urlAfterRedirects

            this.history = [...this.history, urlAfterRedirects];
        } 
      });
  }

  protected setEventId(url){
    let splitUrl = url.split('/');
    let  event_id = + splitUrl[2]
    
    if(splitUrl[1]==='event' && event_id>0){
      this.eventService.event_id = event_id 
    }else{
      this.eventService.event_id = null;
    }
  }

  public getHistory(): string[] {
    return this.history;
  }

  public getPreviousUrl(): string {
   
    return this.history[this.history.length - 2] || '/';;
  }

  deleteLast() {
   
    this.history = this.history.slice(0,this.history.length-2)
     
  }
}