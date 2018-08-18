import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  api_url = environment.api_url;


  setUser(result){

    if(result && result['token']){
      localStorage.setItem('token',result['token'])
      return true;
    }
    return false;
  }

  login(credentials) { 
    
    return this.http.post(this.api_url+'/login', credentials)
    .pipe( map( result => this.setUser(result)));
     
    
  }

  resetPassword(credentials){
   
    return this.http.post(this.api_url+'/resetPaswoord',credentials) 
    .pipe( map( result => this.setUser(result)));

  }  

  register(credentials){

    return this.http.post(this.api_url+'/register', credentials)
     .pipe( map( result => this.setUser(result)));
  }

  logout() { 
 
    localStorage.removeItem('token');
    
  }

  isLoggedIn() { 

     let jwtHelper = new JwtHelperService();

     let token = this.getToken();
     if(!token) return false;

     let isExpired = jwtHelper.isTokenExpired(token);
     return (!isExpired)
    
  }

  get currentUser(){

    let token = this.getToken()
    
    if(!token) return null;

    let user = new JwtHelperService().decodeToken( token );

  
    return user;
  }

  get userAvatar(){

    let image = 'assets/images/user-avatar.jpeg';

    if( this.currentUser ){
      image = this.currentUser.image
    }

    return image;

  }

  getToken(){
    return  localStorage.getItem('token');
  }
}

