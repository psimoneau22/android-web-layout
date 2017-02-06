import { CalendarConfig } from './calendar';

export class Assignment {

    constructor(
        public title: string,
        public config: CalendarConfig = CalendarConfig.defaults
    ) { }
}