import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public weatherBaseUrl = 'http://api.openweathermap.org/data/2.5';
  public WEATHER_API_KEY = environment.WEATHER_API_KEY;

    constructor(private http: HttpClient) {}

    getFiveDaysForecast() {       
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      const params = new HttpParams()
        .set('lat', '41.367700')
        .set('lon','2.056030')
        .set('units', 'metric')
        .set('appid', this.WEATHER_API_KEY);

      return this.http.get<Forecast>(this.weatherBaseUrl + '/forecast', {headers: headers, params: params});
  }
}
