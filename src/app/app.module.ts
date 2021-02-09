import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DayComponent } from './components/day/day.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CalendarSelectorsComponent } from './components/calendar-selectors/calendar-selectors.component';
import { WeatherService } from './services/weather.service';
import { InspectionService } from './services/inspection.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    WeatherComponent,
    CalendarSelectorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    InspectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
