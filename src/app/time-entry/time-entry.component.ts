import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Assignment } from '../models/assignment';
import { Timesheet, TimesheetStatus, TimesheetDay, TimesheetDayStatus } from '../models/timesheet';
import { CalendarConfig, CalendarDisplayType, CalendarNavType, CalendarStartDayOfWeek } from "../models/calendar";
import { TimeEntryCalendarComponent } from '../time-entry-calendar/time-entry-calendar.component';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit {

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

  private getTimesheet(startDate: Date) {
    return new Timesheet(startDate);
  }

  onCalendarNavClick(timesheetDirection: CalendarNavType) {
    const nextStartDate = new Date(this.timesheet.startDate);
    const increment = (timesheetDirection === CalendarNavType.Previous ? -7 : 7);
    nextStartDate.setDate(this.timesheet.startDate.getDate() + increment);
    this.timesheet = this.getTimesheet(nextStartDate);
  }
}
