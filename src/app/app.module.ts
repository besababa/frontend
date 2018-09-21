import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RoutingState } from 'core/helpers/RoutingState';
import { TokenInterceptor } from 'core/helpers/token.interceptor';
import { SharedModule } from 'shared/shared.module';

import { AppComponent } from './app.component';
import { EditSupplyComponent } from './core/components/supply-event/edit-supply/edit-supply.component';
import { NewSuppliyComponent } from './core/components/supply-event/new-suppliy/new-suppliy.component';
import { SupplyEventComponent } from './core/components/supply-event/supply-event.component';
import { CoreModule } from './core/core.module';
import { FriendRolesComponent } from './event/components/event-freinds/friend-roles/friend-roles.component';
import { EventModule } from './event/event.module';


@NgModule({
  
  imports: [

    SharedModule,
    EventModule,
    CoreModule,
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([]),
    
  ],
  declarations: [

    AppComponent,
    SupplyEventComponent,
    NewSuppliyComponent,
    EditSupplyComponent,

  ],
  providers: [
    RoutingState,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
