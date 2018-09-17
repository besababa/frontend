import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/events.service';


@Component({
  selector: 'event-supply',
  templateUrl: './supply-event.component.html',
  styleUrls: ['./supply-event.component.css'],
})
export class SupplyEventComponent implements OnInit {

  public duplicateSupply;
 
  supplies;

  
  constructor(private eventsService :EventsService,private activatedRoute: ActivatedRoute) {
   
  }
  
  ngOnInit() {
   
    this.activatedRoute.paramMap.subscribe(parmas => {
      if(parmas.has('event_id')){
       
        this.eventsService.getEventSupplies( parmas.get('event_id'))
        .subscribe(supplies=>{
          console.log('event-supplys' ,supplies)
          this.supplies = supplies;
        })
        

        console.log(parmas.get('event_id'))
      }
    });

   
    

  }


  addSupply(supply){
  
  
   
  }
  editSupply(supply): void {

    
  }

}
