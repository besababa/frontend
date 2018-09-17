import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplyService extends DataService{

  constructor( http : HttpClient, router:Router){ 
    
    super(environment.api_url+'/supplies',http,router);
  }

 


}
