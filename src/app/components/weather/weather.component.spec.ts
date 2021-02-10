import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DayWeather } from 'src/app/models/day-weather.model';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have currentWeater', () => {
    const dayWeatherForecast = [];
    dayWeatherForecast[0] = {
      "dt": 1612958400,
      main: {
        "temp": 12.75,
        "temp_min": 12.75,
        "temp_max": 13.39,
        "feels_like": 14,
        "roundedMin": 14
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ]
    };

    component.dayWeatherForecast = dayWeatherForecast;

    fixture.detectChanges();
    component.ngOnChanges({
      dayWeatherForecast: new SimpleChange(null, dayWeatherForecast, null)
    });

    expect(component.currentWeather).toBeTruthy();
  });

  it('should display temperature', () => {
    const dayWeatherForecast = [];
    dayWeatherForecast[0] = {
      "dt": 1612958400,
      main: {
        "temp": 12.75,
        "temp_min": 12.75,
        "temp_max": 13.39,
        "feels_like": 14,
        "roundedMin": 14
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ]
    };

    component.dayWeatherForecast = dayWeatherForecast;

    fixture.detectChanges();
    component.ngOnChanges({
      dayWeatherForecast: new SimpleChange(null, dayWeatherForecast, null)
    });

    expect(component.currentWeather.main).toBeTruthy();
  });


  it('it should show a list of weather icons', () => {

    const dayWeatherForecast = [];
    dayWeatherForecast[0] = {
      "dt": 1612958400,
      main: {
        "temp": 12.75,
        "temp_min": 12.75,
        "temp_max": 13.39,
        "feels_like": 14,
        "roundedMin": 14
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ]
    };

    component.dayWeatherForecast = dayWeatherForecast;

    fixture.detectChanges();
    component.ngOnChanges({
      dayWeatherForecast: new SimpleChange(null, dayWeatherForecast, null)
    });

    expect(component.weatherIcons).toBeTruthy();

  });
});
