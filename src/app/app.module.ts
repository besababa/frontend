import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule, MatNativeDateModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventsComponent } from './components/events/events.component';
import { FoterComponent } from './components/foter/foter.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewEventBtnComponent } from './components/new-event-btn/new-event-btn.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { TitleEventComponent } from './components/title-event/title-event.component';
import { RoutingState } from './helpers/RoutingState';
import { TokenInterceptor } from './helpers/token.interceptor';
import { AuthService } from './services/auth.service';
import { EventsService } from './services/events.service';
import { ImageEventComponent } from './components/image-event/image-event.component';
import { ActionBtnComponent } from './components/btn/action-btn/action-btn.component';
import { AppErrorHandler } from './common/app-error-handler';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { InfoEventComponent } from './components/info-event/info-event.component';
import { MainEventComponent } from './components/main-event/main-event.component';
import { ReadMoreComponent } from './components/long-text/long-text.component';
import { EventHeaderComponent } from './components/event-header/event-header.component';
import { EventNotificationsComponent } from './components/event-notifications/event-notifications.component';
import { SupplyEventComponent } from './components/supply-event/supply-event.component';
import { EventComponent } from './components/event/event.component';
import { NewSuppliyComponent } from './components/supply-event/new-suppliy/new-suppliy.component';
import { EditSupplyComponent } from './components/supply-event/edit-supply/edit-supply.component';
import { EventAppsComponent } from './components/event-apps/event-apps.component';
import { NewAppComponent } from './components/new-app/new-app.component';
import { DisplayEventAppsComponent } from './components/display-event-apps/display-event-apps.component';
import { AppLinkComponent } from './components/app-link/app-link.component';
import { EventFreindsComponent } from './components/event-freinds/event-freinds.component';
import { EditFriendComponent } from './components/event-freinds/edit-friend/edit-friends.component';
import { NewFriendComponent } from './components/event-freinds/new-friend/new-friend.component';
import { ActiveStatusComponent } from './components/active-status/active-status.component';
import { FriendRolesComponent } from './components/event-freinds/friend-roles/friend-roles.component';


const appRoutes:Routes = [

  {
    path:'',
    component:HomeComponent,
   
  },

  {
    path:'user',
    component:HomeComponent
  },
  {
    path:'event',
    children:[
      {
        path:'title',
        component:TitleEventComponent,
       
      },
    
      {
        path:'image',
        component:ImageEventComponent,
       
      },
      {
        path:'info',
        component:InfoEventComponent,
       
      },
      {
        path:':event_id',
    
        children:[
          { 
            path:'apps',
            children:[
              {
                path:'new',
                component:NewAppComponent,
              },
            
              {
                path:'',
                component:EventAppsComponent,
               
              },


            ],
           
            
          },
          {
            path:'home',
            component:MainEventComponent,
          },
          {
            path:'friends',
            component:EventFreindsComponent,
          }
        
          

        ]
       
      },
    
    ]
  },  
  
  {
    path:'login',
    component:LoginComponent,
   
  },
  {
    path:'register',
    component:RegisterComponent,
   
  },

  
 {
   path:'not-fount',
   component:NotFoundComponent,
 }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FoterComponent,
    HomeComponent,
    BackBtnComponent,
    NewEventBtnComponent,
    EventsComponent,
    EventCardComponent,
    TitleEventComponent,
    LoginComponent,
    RegisterComponent,
    ImageEventComponent,
    ActionBtnComponent,
    PageTitleComponent,
    InfoEventComponent,
    MainEventComponent,
    ReadMoreComponent,
    EventHeaderComponent,
    EventNotificationsComponent,
    SupplyEventComponent,
    EventComponent,
    NewSuppliyComponent,
    EditSupplyComponent,
    EventAppsComponent,
    NewAppComponent,
    DisplayEventAppsComponent,
    AppLinkComponent,
    EventFreindsComponent,
    EditFriendComponent,
    NewFriendComponent,
    ActiveStatusComponent,
    FriendRolesComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSortModule,
    MatAutocompleteModule,
    MatToolbarModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [
    RoutingState,
    AuthService,
    EventsService,
    {provide:ErrorHandler, useClass:AppErrorHandler},

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
