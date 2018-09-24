import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatTableModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule } from 'angular5-social-login';
import { AppErrorHandler } from 'shared/common/app-error-handler';
import { ActionBtnComponent } from 'shared/components/action-btn/action-btn.component';
import { ActiveStatusComponent } from 'shared/components/active-status/active-status.component';
import { BackBtnComponent } from 'shared/components/back-btn/back-btn.component';
import { LoginModalComponent } from 'shared/components/login-modal/login-modal.component';
import { ReadMoreComponent } from 'shared/components/long-text/long-text.component';
import { PageTitleComponent } from 'shared/components/page-title/page-title.component';
import { ShareEventModalComponent } from 'shared/components/share-event-modal/share-event-modal.component';
import { BsAuthService } from 'shared/services/bs.auth.service';
import { EventsService } from 'shared/services/events.service';

import { MenuHeaderComponent } from './components/menu-header/menu-header.component';


// Configs 
export function getAuthServiceConfigs() {

  
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("263898594140228")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("103691219863-1je80gmgsbc29b1bbs8956pkbnvqu2d1.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}




const sharedRoutes:Routes = [];

@NgModule({
  imports: [
    SocialLoginModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forChild(sharedRoutes),
    ShareButtonsModule.forRoot(),

    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatGridListModule,

  ],
  declarations: [
    ActionBtnComponent,
    BackBtnComponent,
    ReadMoreComponent,
    PageTitleComponent,
    ActiveStatusComponent,
    LoginModalComponent,
    MenuHeaderComponent,
    ShareEventModalComponent,



  ],
  exports: [
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot().ngModule,
    ShareButtonsModule.forRoot().ngModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ActionBtnComponent,
    BackBtnComponent,
    ReadMoreComponent,
    PageTitleComponent,
    ActiveStatusComponent,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatInputModule,
    MatChipsModule,
    MatGridListModule,
    LoginModalComponent,
    MenuHeaderComponent,
    ShareEventModalComponent,


  ],
  providers: [
    BsAuthService,
    EventsService,
    {provide:ErrorHandler, useClass:AppErrorHandler},

    {provide: AuthServiceConfig,useFactory: getAuthServiceConfigs},
  ]
})
export class SharedModule { }

