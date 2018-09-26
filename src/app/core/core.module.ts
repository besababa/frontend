import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventHeaderComponent } from 'event/components/event-header/event-header.component';
import { AppSharedModule } from 'shared/shared.module';

import { FoterComponent } from './components/foter/foter.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';



const coreRoutes:Routes = [

  {
    path:'login',
    component:LoginComponent,  
  },
  {
    path:'register',
    component:RegisterComponent, 
  }, 
  {
   path:'*',
   component:NotFoundComponent,
  }
];


@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forRoot(coreRoutes),
  ],
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FoterComponent,
    LoginComponent,
    RegisterComponent, 
    EventHeaderComponent,
  ],
  exports:[
    EventHeaderComponent,
    HeaderComponent
  ]
  
})
export class CoreModule { }
