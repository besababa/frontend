import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppError } from '../common/app-error';
import { BadINput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { Router } from '@angular/router';

export class DataService {
  
  constructor(public url:string,public http : HttpClient,public router:Router) { }
  
  getAll(){
    
    return this.http.get(this.url)
      .catch(this.handelError);
  }

  update(id,resource){

    return this.http.put(this.url+'/'+id,resource)
      .catch(this.handelError);
  }

  create(resource){

    return this.http.post(this.url,resource)
      .catch(this.handelError);
  }

  delete(id){
    return this.http.delete(this.url+'/'+id)
      .catch(this.handelError);

  }
  getOne(id){
   
    return this.http.get(this.url+'/'+id)
      .catch(this.handelError);

  }

  public handelError(response: Response){

    if(response.status==404)
      return Observable.throw(new NotFoundError)

    if(response.status ==400)
      return Observable.throw(new BadINput(response['message']));

    return Observable.throw(new AppError(response['message']));

  }


}