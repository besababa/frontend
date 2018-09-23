import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class BsAuthService {
  constructor(private http: HttpClient) {
  }

  api_url = environment.api_url;

  socialSignIn(userData) {

    const formData = new FormData();
      formData.append('email', userData.email);
      formData.append('name', userData.name);
      formData.append('provider', userData.provider);
      formData.append('id', userData.id);
      formData.append('idToken', userData.idToken);
      formData.append('token', userData.token);
      formData.append('image', userData.image);

    return this.http.post(this.api_url + '/auth/social',formData );
  }


  setUser(result){

    if(result ){
      if( result['token']){
        localStorage.setItem('token',result['token'])
      }
      if(result['image']){
        localStorage.setItem('image',result['image'])
      }

      if(result['email']){
        localStorage.setItem('email',result['email'])
      }
      if(result['name']){
        localStorage.setItem('name',result['name'])
      }
     
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
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('image');

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
    user.name = localStorage.getItem('name');
    user.email = localStorage.getItem('email');
    user.image = localStorage.getItem('image');
    return user;
  }

  
  get userAvatar(){

    let image = 'assets/images/user-avatar.jpeg';

    if( this.currentUser && this.currentUser.image ){
      image = localStorage.getItem('image');
    }

    return image;
  }

  getToken(){
    return  localStorage.getItem('token');
  }
}

