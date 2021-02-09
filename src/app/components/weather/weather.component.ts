import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DayWeather } from 'src/app/models/day-weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input('weather') weather: DayWeather;
  private imgUrl = 'http://openweathermap.org/img/wn/';
  private imgSize = '@2x';
  private imgFormat = '.png';
  public weatherIcons: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['weather']) {
      this.setWeatherIcon();
      this.weather.temp.roundedMin = Math.round(this.weather.temp.min);
    }
  }

  private setWeatherIcon() {
    if (this.weather && this.weather.weather) {
      this.weather.weather.forEach(w => {
        this.weatherIcons.push(this.imgUrl + w.icon + this.imgSize + this.imgFormat)
      });
    }
  }

}
