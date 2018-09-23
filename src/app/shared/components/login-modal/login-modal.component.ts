import { Component } from '@angular/core';
import {NgbActiveModal,  NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';
import { BsAuthService } from 'shared/services/bs.auth.service';


@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],

  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbActiveModal, NgbModal]
})

export class LoginModalComponent {
  loading:boolean;
  private modalRef: NgbModalRef;
  private closeResult;
  message:string="Your entrain to the dream"
  constructor(
     private auth: BsAuthService,
     private active: NgbActiveModal,
     private modalService: NgbModal,
     private socialAuthService: AuthService
  ) {
  
  }

  open(content) {
    this.modalRef = this.modalService.open(content);
    
  }


  public socialSignIn(socialPlatform : string) {

    console.log(socialPlatform);
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {

        this.auth.socialSignIn(userData).subscribe(result=>{
          console.log(this.modalRef)
          this.modalRef.close();
          this.auth.setUser(result);

        })
       
       
      }
    );
  }

  
}