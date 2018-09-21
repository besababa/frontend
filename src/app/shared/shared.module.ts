import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatTableModule,
  MatChipsModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppErrorHandler } from 'shared/common/app-error-handler';
import { ActionBtnComponent } from 'shared/components/action-btn/action-btn.component';
import { ActiveStatusComponent } from 'shared/components/active-status/active-status.component';
import { BackBtnComponent } from 'shared/components/back-btn/back-btn.component';
import { ReadMoreComponent } from 'shared/components/long-text/long-text.component';
import { PageTitleComponent } from 'shared/components/page-title/page-title.component';
import { AuthService } from 'shared/services/auth.service';
import { EventsService } from 'shared/services/events.service';

const sharedRoutes:Routes = [];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(sharedRoutes),

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

  ],
  declarations: [
    ActionBtnComponent,
    BackBtnComponent,
    ReadMoreComponent,
    PageTitleComponent,
    ActiveStatusComponent,

  ],
  exports: [
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

  ],
  providers: [
    AuthService,
    EventsService,
    {provide:ErrorHandler, useClass:AppErrorHandler},
  ]
})
export class SharedModule { }
