import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatTableModule,
  MatGridListModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
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
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
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
    MatGridListModule,

  ],
  declarations: [
    ActionBtnComponent,
    BackBtnComponent,
    ReadMoreComponent,
    PageTitleComponent,
    ActiveStatusComponent,

  ],
  exports: [
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot().ngModule,
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

  ],
  providers: [
    AuthService,
    EventsService,
    {provide:ErrorHandler, useClass:AppErrorHandler},
  ]
})
export class SharedModule { }
