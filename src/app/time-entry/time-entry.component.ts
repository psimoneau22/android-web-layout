import { Component, OnInit, ViewChild } from '@angular/core';
import { Assignment } from '../models/assignment';
import { Timesheet, TimesheetStatus, TimesheetDay, TimesheetDayStatus } from '../models/timesheet';
import { CalendarConfig, CalendarDay, CalendarDayStatus, CalendarDisplayType, CalendarNavType, CalendarStartDayOfWeek } from "../models/calendar";
import { TimeEntryCalendarComponent } from '../time-entry-calendar/time-entry-calendar.component';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit {

  assignment: Assignment;
  timesheet: Timesheet;
  reviewIsOpen = false;

  @ViewChild('calendar')
  calendar: TimeEntryCalendarComponent;

  constructor(
  ) { }

  ngOnInit() {
    this.assignment = this.getAssignment('test');
    this.timesheet = this.getTimesheet(new Date());
  }

  private getAssignment(assignmentId: string) {
    return new Assignment('Assignment 1');
  }

  private getTimesheet(startDate: Date) {
    return new Timesheet();
  }

  onCalendarNavClick(timesheetDirection: CalendarNavType){
    const nextStartDate = new Date(this.timesheet.startDate);
    let increment = (this.assignment.config.displayType === CalendarDisplayType.Week ? 7 : 1);
    increment *= (timesheetDirection === CalendarNavType.Previous ? -1 : 1);

    if (this.assignment.config.displayType === CalendarDisplayType.Week) {
      nextStartDate.setDate(this.timesheet.startDate.getDate() + increment);
    }
    else if(this.assignment.config.displayType === CalendarDisplayType.Month) {
      nextStartDate.setMonth(this.timesheet.startDate.getMonth() + increment);
    }
    console.log('onCalendarNavClick', timesheetDirection);
  }
}
