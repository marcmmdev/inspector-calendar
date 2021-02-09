import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inspector-calendar';

  @ViewChild('calendar') calendar: CalendarComponent;

  constructor() {}

  ngOnInit() {}

  public updateCalendar(dates) {
    const updatedDate = moment({month: dates.month, year: dates.year});
    this.calendar.initCalendar(updatedDate);
  }

}
