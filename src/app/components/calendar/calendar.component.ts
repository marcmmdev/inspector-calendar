import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Calendar } from 'src/app/models/calendar.model';
import { Day } from 'src/app/models/day.model';
import { InspectionService } from 'src/app/services/inspection.service';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public calendar: Calendar;

  constructor(private weatherService: WeatherService,
    private inspectionService: InspectionService) { }

  ngOnInit(): void {
    moment.locale('es');
    this.initCalendar(moment(new Date()));
  }

  initCalendar(date: any) {
    this.calendar = new Calendar();
    this.fillCalendar(date);
  }

  public fillCalendar(date: any) {
    this.calendar.weeks = [];
    const startDay = date.clone().startOf('month').startOf('week');
    const endDay = date.clone().endOf('month').endOf('week');

    let auxDate = startDay.clone().subtract(1, 'day');

    while (auxDate.isBefore(endDay, 'day')) {
      this.calendar.weeks.push(Array(7).fill(0).map(() => this.addMonthDay(auxDate)));
    }

    this.calendar.setCalendarMonthDays();
  }

  public addMonthDay(date: moment.Moment): Day {
    const day = new Day();
    day.date = date.add(1, 'day').clone();
    day.inspectionAssigned = undefined;
    day.dayWeather = undefined;
    return day;
  }

}
