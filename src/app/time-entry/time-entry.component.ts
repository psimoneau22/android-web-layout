import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Assignment } from '../models/assignment';
import { Timesheet, TimesheetStatus, TimesheetDay, TimesheetDayStatus } from '../models/timesheet';
import { CalendarConfig, CalendarDisplayType, CalendarNavType, CalendarStartDayOfWeek } from "../models/calendar";
import { TimeEntryCalendarComponent } from '../time-entry-calendar/time-entry-calendar.component';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit, OnChanges {

  @Input()
  assignment: Assignment;

  timesheet: Timesheet;
  reviewIsOpen = false;

  @ViewChild('calendar')
  calendar: TimeEntryCalendarComponent;

  constructor(
  ) { }

  ngOnInit() {
    this.timesheet = this.getTimesheet(new Date());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['assignment']) {
      this.timesheet = this.getTimesheet(new Date());
    }
  }

  private getTimesheet(startDate: Date) {
    return new Timesheet(startDate);
  }

  changeCurrentTimesheet(direction: CalendarNavType) {
    const nextStartDate = new Date(this.timesheet.startDate);
    const increment = (direction === CalendarNavType.Previous ? -7 : 7);
    nextStartDate.setDate(this.timesheet.startDate.getDate() + increment);
    this.timesheet = this.getTimesheet(nextStartDate);
  }

  submitTimesheet() {
    this.reviewIsOpen = !this.reviewIsOpen;
    console.log('submit timesheet clicked');
  }

  resetTimesheet() {
    console.log('reset timesheet clicked');
  }

  confirmTimesheetEntries() {
    console.log('confirm timesheet entries clicked');
  }
}
