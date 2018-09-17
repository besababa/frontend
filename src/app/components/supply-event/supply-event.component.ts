import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService, AppEvent } from '../../services/events.service';


@Component({
  selector: 'event-supply',
  templateUrl: './supply-event.component.html',
  styleUrls: ['./supply-event.component.css'],
})
export class SupplyEventComponent implements OnInit {

  public duplicateSupply;
 
  supplies;

  
  constructor(public eventsService :EventsService,private activatedRoute: ActivatedRoute) {
   
  }
  
  ngOnInit() {
   
    let event_id = this.eventsService.event_id;
    this.eventsService.getEventSupplies(event_id)
      .subscribe(supplies=>{
    
        this.supplies = supplies;

      }, error=>{

        console.log(error)
      })

   
    

  }


  addSupply(supply){
  
  
   
  }
  editSupply(supply): void {

    
  }

}
