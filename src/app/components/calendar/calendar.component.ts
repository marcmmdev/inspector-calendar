import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Calendar } from 'src/app/models/calendar.model';
import { Day } from 'src/app/models/day.model';
import { Forecast } from 'src/app/models/forecast.model';
import { InspectionService } from 'src/app/services/inspection.service';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public calendar: Calendar;
  public inspectionDays: moment.Moment[];

  constructor(private weatherService: WeatherService,
    private inspectionService: InspectionService) { }

  ngOnInit(): void {
    moment.locale('es');
    // Retrieve mock data for inspectionDays
    this.inspectionDays = this.inspectionService.getInspectionDays();
    this.initCalendar(moment(new Date()));
  }

  initCalendar(date: any) {
    this.calendar = new Calendar();
    this.fillCalendar(date);
    this.setInspectionDays();
    if (this.isDateCurrentMonth(date)) {
      this.getForecast();
    } 
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

  public isDateCurrentMonth(date: any): boolean {
    const auxDate = moment(new Date());
    return (date.month() === auxDate.month()) && (date.year() === auxDate.year());
  }

  public getForecast() {
    this.weatherService.getFiveDaysForecast().subscribe((forecast: Forecast) => {
      this.setForecastToDays(forecast);
    });
  }
 
  public setForecastToDays(forecast: Forecast) {
    // Get the first forecast day in the days array to set up the next 5 days forecast
    const firstForecastDayIndex = this.calendar.days.findIndex((day) => {
      if (day.date.format('DD/MM/YYYY') === moment.unix(forecast.daily[0].dt).format('DD/MM/YYYY')) {
        return day;
      }
    });

    // Set the forecast info into the next 5 days
    let forecastDays = this.calendar.days.slice(firstForecastDayIndex, firstForecastDayIndex + 5);
    forecastDays.forEach((day: Day, index) => {
      day.dayWeather = forecast.daily[index];
    });
    
  }

  public setInspectionDays() {
    this.inspectionDays.forEach(date => {
      const inspectionDayIndex = this.calendar.days.findIndex((day) => {
        if (day.date.format('DD/MM/YYYY') === date.format('DD/MM/YYYY')) {
          return day;
        }
      });
      
      if (inspectionDayIndex != -1) {
        this.calendar.days[inspectionDayIndex].inspectionAssigned = true;
      }

    });
  }

}
