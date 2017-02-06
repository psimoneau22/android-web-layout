import { CalendarConfig } from './calendar';

export class Assignment {

    constructor(
        public title: string,
        public startDate: Date,
        public endDate: Date,
        public config: CalendarConfig = CalendarConfig.defaults
    ) { }
}