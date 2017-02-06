import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { CalendarNavType, CalendarStartDayOfWeek, CalendarDay, CalendarDayStatus, CalendarConfig, CalendarDisplayType } from '../models/calendar';
import { Timesheet, TimesheetDayStatus, TimesheetDay, TimesheetStatus } from '../models/timesheet';
import * as _ from "lodash";

@Component({
  selector: 'app-time-entry-calendar',
  templateUrl: './time-entry-calendar.component.html',
  styleUrls: ['./time-entry-calendar.component.scss']
})
export class TimeEntryCalendarComponent implements OnInit, OnChanges {

  private _config: CalendarConfig;
  @Input()
  set config(val: CalendarConfig) {
    this._config = _.merge({}, CalendarConfig.defaults, val);
  }
  get config(){
    return this._config || CalendarConfig.defaults;
  }

  @Input()
  timesheet: Timesheet;

  @Output()
  navClicked = new EventEmitter<CalendarNavType>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  }

  private get title(): string {
    // todo show monthly title
    const startMonth = this.config.monthNames[this.timesheet.startDate.getMonth()];
    const endMonth = this.config.monthNames[this.timesheet.endDate.getMonth()];
    return `${startMonth} ${this.timesheet.startDate.getDate()}- ${endMonth} ${this.timesheet.endDate.getDate()}`;
  }

  private getDayOrder(index){
    if (this.config.startDayOfWeek === CalendarStartDayOfWeek.Monday && index === 0){
      return 2;
    }
    return 1;
  }

  private previous() {
    this.navClicked.emit(CalendarNavType.Previous);
  }

  private next() {
    this.navClicked.emit(CalendarNavType.Next);
  }

  private statusClass(day: TimesheetDay): string {
    let className = 'status-';
    if (day.status ===  TimesheetDayStatus.Selected) {
      className += 'accent';
    }
    else if (day.hours > 0 || day.minutes > 0) {
      className += 'primary';
    }
    else {
      className += 'default';
    }

    return className;
  }

  private dayClicked(day: TimesheetDay) {
    if (this.allowDaySelect(day)) {
        day.status = day.status === TimesheetDayStatus.Default ? TimesheetDayStatus.Selected : TimesheetDayStatus.Default;
    }
    console.log('onCalendarDayClick', day);
  }

  private allowDaySelect(day: TimesheetDay) {
    return true;
  }
}