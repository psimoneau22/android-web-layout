import { CalendarDisplayType } from './calendar';
export class Timesheet {

    public days: Array<TimesheetDay>;

    constructor(
        public startDate = new Date(),
        public status = TimesheetStatus.NotSubmitted,
        public periodType = CalendarDisplayType.Week,
        days = new Array<TimesheetDay>()
    ) {

        this.days = new Array<TimesheetDay>();
        for (let i = 0; i < 7; i++) {
            const current = new Date(startDate);
            current.setDate(startDate.getDate() + i);

            const existing = days.find(d => d.date.toString() === current.toDateString());
            this.days.push(new TimesheetDay(
                current,
                existing ? existing.hours : 0,
                existing ? existing.minutes : 0,
                TimesheetDayStatus.Default
            ));
        }
     }

     get endDate(){
         // todo calculate monthly
        const result = new Date(this.startDate);
        result.setDate(result.getDate() + 6);
        return result;
     }

    isValid() {
        return true;
    }
}

export class TimesheetDay {

    constructor(
        public date = new Date(),
        public hours = 0,
        public minutes = 0,
        public status = TimesheetDayStatus.Default
    ) { }
}

export enum TimesheetStatus {
    NotSubmitted,
    Submitted,
    Approved,
    Rejected
}

export enum TimesheetDayStatus {
    Default,
    Selected
}