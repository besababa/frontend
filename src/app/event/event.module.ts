import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from 'core/components/home/home.component';
import { FriendRolesComponent } from 'event/components/event-friends/friend-roles/friend-roles.component';
import { EventsComponent } from 'shared/components/events/events.component';
import { AppSharedModule } from 'shared/shared.module';

import { AppLinkComponent } from './components/app-link/app-link.component';
import { DisplayEventAppsComponent } from './components/display-event-apps/display-event-apps.component';
import { EventAppsComponent } from './components/event-apps/event-apps.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EditFriendComponent } from 'event/components/event-friends/edit-friend/edit-friends.component';
import { EventFreindsComponent } from 'event/components/event-friends/event-freinds.component';
import { FriendsTableComponent } from 'event/components/event-friends/friends-table/friends-table.component';

import { EventNotificationsComponent } from './components/event-notifications/event-notifications.component';
import { EventComponent } from './components/event/event.component';
import { ImageEventComponent } from './components/image-event/image-event.component';
import { InfoEventComponent } from './components/info-event/info-event.component';
import { MainEventComponent } from './components/main-event/main-event.component';
import { NewAppComponent } from './components/new-app/new-app.component';
import { NewEventBtnComponent } from './components/new-event-btn/new-event-btn.component';
import { TitleEventComponent } from './components/title-event/title-event.component';



const eventRoutes:Routes = [

  {
    path:'',
    component:HomeComponent,
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
];

@NgModule({
  imports: [
    AppSharedModule,
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(eventRoutes),    
  ],
  declarations: [
    HomeComponent,
    AppLinkComponent,
    DisplayEventAppsComponent,
    EventComponent,
    EventAppsComponent,
    EventCardComponent,
    EventFreindsComponent,
    EventNotificationsComponent,
    EventsComponent,
    ImageEventComponent,
    InfoEventComponent,
    MainEventComponent,
    NewAppComponent,
    NewEventBtnComponent,
    TitleEventComponent,
    EditFriendComponent,
    FriendRolesComponent,
    FriendsTableComponent,

  ],
  exports: [
    EventsComponent
  ]
 
})
export class EventModule { }
