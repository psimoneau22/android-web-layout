export enum CalendarNavType {
  Previous,
  Next
}

export enum CalendarDisplayType {
  Week,
  Month
}

export enum CalendarStartDayOfWeek {
  Sunday = 0,
  Monday
}
export class CalendarConfig {

    public static readonly defaults = new CalendarConfig(
        [
            "Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"
        ],
        [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        CalendarStartDayOfWeek.Sunday,
        CalendarDisplayType.Week
    );

    constructor(
        public dayNames: string[] = CalendarConfig.defaults.dayNames,
        public monthNames: string[] = CalendarConfig.defaults.monthNames,
        public startDayOfWeek: CalendarStartDayOfWeek = CalendarConfig.defaults.startDayOfWeek,
        public displayType: CalendarDisplayType = CalendarConfig.defaults.displayType
    ) { }
}
