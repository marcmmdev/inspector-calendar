import { Day } from "./day.model";

export class Calendar {
    public weeks: Day[][];
    public days: Day[];


    public setCalendarMonthDays() {
        this.days = [];
        this.weeks.forEach(week => {
            this.days = this.days.concat(week);
        });
    }
}