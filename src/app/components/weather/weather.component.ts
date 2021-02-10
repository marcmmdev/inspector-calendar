import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DayWeather } from 'src/app/models/day-weather.model';
import * as moment from 'moment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input('weather') dayWeatherForecast: DayWeather[];
  @Input('isToday') isToday: boolean;

  public currentWeather: DayWeather;

  private imgUrl = 'http://openweathermap.org/img/wn/';
  private imgSize = '@2x';
  private imgFormat = '.png';
  public weatherIcons: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dayWeatherForecast'] && changes['dayWeatherForecast'].currentValue &&
    changes['dayWeatherForecast'].currentValue.length > 0) {
      this.setCurrentWeatherForecast();
      this.setWeatherIcon();
    }
  }

  public setCurrentWeatherForecast() {
    // We get 8 forecasts for the day on the API but
    // On the current day, we only get the forecasts ahead of our current time
    // To simplify, the calendar will always show the info closer to the 
    // current hour that the API bring us if it's today 
    // For the next days the calendas will show the weather for 12:00h the days ahead.
    if (this.isToday) {
      this.currentWeather = this.dayWeatherForecast[0];
    } else {
      this.dayWeatherForecast.forEach((dw: DayWeather) => {
        if (moment.unix(dw.dt).utc().hour() === 12) {
          this.currentWeather = dw;
        }
      });
    }

  }

  private setWeatherIcon() {
    if (this.currentWeather && this.currentWeather.weather) {
      this.currentWeather.weather.forEach(w => {
        this.weatherIcons.push(this.imgUrl + w.icon + this.imgSize + this.imgFormat)
      });
    }
  }

}
