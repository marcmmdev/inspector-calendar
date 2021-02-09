import { FeelTemperature } from "./feel-temperature.model";
import { Temperature } from "./temperature.model";
import { Weather } from "./weather.model";

export class DayWeather {
    clouds: number;
    dew_point: number;
    dt: number;
    humidity: number;
    pop: number;
    pressure: number;
    rain: number;
    sunrise: number;
    sunset: number;
    uvi: number;
    wind_deg: number;
    wind_speed: number;
    weather: Weather[];
    temp: Temperature;
    feels_like: FeelTemperature;
}