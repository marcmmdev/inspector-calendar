import { TestBed } from "@angular/core/testing";
import { Forecast } from "src/app/models/forecast.model";
import { WeatherService } from "src/app/services/weather.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams } from "@angular/common/http";

let service: WeatherService;

describe('WeatherService', () => {

    let service: WeatherService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [WeatherService]});

        service = TestBed.inject(WeatherService);
        httpMock = TestBed.inject(HttpTestingController);
    });
    
    it('get forecast from openWeather API using GET request', () => {

        const dummyForecast = {
            city: {
                "id": 3110519,
                "name": "Sant Joan Despí",
                "coord": {
                    "lat": 41.3677,
                    "lon": 2.056
                },
                "country": "ES",
                "population": 32030,
                "timezone": 3600,
                "sunrise": 1612939994,
                "sunset": 1612977536
            },
            cnt: 40,
            cod: '200',
            list: [
                {
                    "dt": 1612926000,
                    "main": {
                        "temp": 11.41,
                        "feels_like": 5.91,
                        "temp_min": 11.21,
                        "temp_max": 11.41,
                        "pressure": 1002,
                        "sea_level": 1002,
                        "grnd_level": 1000,
                        "humidity": 67,
                        "temp_kf": 0.2
                    },
                    "weather": [{
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }],
                    "clouds": {
                        "all": 18
                    },
                    "wind": {
                        "speed": 6.4,
                        "deg": 261
                    },
                    "visibility": 10000,
                    "pop": 0.04,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-02-10 03:00:00"
                }
            ],
            message: 0   
        }

        service.getFiveDaysForecast().subscribe((forecast: Forecast) => {
            expect(forecast).toBeTruthy();
        });

        const params = new HttpParams()
        .set('lat', '41.367700')
        .set('lon','2.056030')
        .set('units', 'metric')
        .set('appid', service.WEATHER_API_KEY);

        const request = httpMock.expectOne(service.weatherBaseUrl + '/forecast?'+params.toString());
        expect(request.request.method).toBe('GET');
        request.flush(dummyForecast);
    });

});