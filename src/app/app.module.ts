import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingState } from 'core/helpers/RoutingState';
import { TokenInterceptor } from 'core/helpers/token.interceptor';
import { AppSharedModule } from 'shared/shared.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EventModule } from './event/event.module';


@NgModule({
  
  imports: [

    AppSharedModule,
    EventModule,
    CoreModule,
    
    RouterModule.forRoot([]),
    
  ],
  declarations: [

    AppComponent,


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
