import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherBaseUrl = 'http://api.openweathermap.org/data/2.5';
  private WEATHER_API_KEY = environment.WEATHER_API_KEY;

    constructor(private http: HttpClient) {}

    getFiveDaysForecast() {       
      return this.http.get<Forecast>(
          this.weatherBaseUrl + '/forecast?lat=41.367700&lon=2.056030&units=metric&appid='+this.WEATHER_API_KEY);
  }
}
