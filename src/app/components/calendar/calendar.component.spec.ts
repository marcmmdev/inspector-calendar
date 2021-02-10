import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  let weatherService: WeatherService;
  let httpMock: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarComponent ],
      imports: [HttpClientModule],
      providers: [WeatherService]
    }).compileComponents();

    weatherService = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve inspection days', () => {
    expect(component.inspectionDays).toBeTruthy();
  });

  it('should fill selected month calendar', () => {
    expect(component.calendar).toBeTruthy();
  });

  it ('should call get forecast from WeatherService', () => {
    const weatherService = fixture.debugElement.injector.get(WeatherService);
    const weatherSpy = spyOn(weatherService, 'getFiveDaysForecast').and.callThrough();
    fixture.detectChanges();
    component.getForecast();

    expect(weatherSpy).toHaveBeenCalled(); // error
    expect(weatherSpy.calls.any()).toBeTruthy(); // error
  });

});
