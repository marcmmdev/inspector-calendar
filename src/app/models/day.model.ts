import * as moment from 'moment';
import { DayWeather } from './day-weather.model';
export class Day {
    date: moment.Moment;
    dayWeather: DayWeather[];
    inspectionAssigned: boolean;
}