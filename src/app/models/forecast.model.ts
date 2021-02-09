import { DayWeather } from "./day-weather.model";

export class Forecast {
    daily: DayWeather[];
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
}