import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { TimeEntryComponent } from './time-entry/time-entry.component';
import { TimeEntryCalendarComponent } from './time-entry-calendar/time-entry-calendar.component';
import { TimeEntryActionsComponent, ValidationDialog } from './time-entry-actions/time-entry-actions.component';
import { TimeEntryFormComponent, SearchDialog } from './time-entry-form/time-entry-form.component';
import { TimeEntryReviewComponent } from './time-entry-review/time-entry-review.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeEntryComponent,
    TimeEntryCalendarComponent,
    TimeEntryActionsComponent,
    ValidationDialog,
    TimeEntryFormComponent,
    SearchDialog,
    TimeEntryReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  entryComponents: [ValidationDialog, SearchDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
