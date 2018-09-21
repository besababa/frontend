import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplyEventComponent } from './components/supply-event/supply-event.component';
import { NewSuppliyComponent } from './components/supply-event/new-suppliy/new-suppliy.component';
import { EditSupplyComponent } from './components/supply-event/edit-supply/edit-supply.component';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([]),
  ],
  declarations: [

    SupplyEventComponent,
    NewSuppliyComponent,
    EditSupplyComponent,
  ]
})
export class AppsModule { }
