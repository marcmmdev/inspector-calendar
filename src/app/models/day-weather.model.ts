import { FeelTemperature } from "./feel-temperature.model";
import { Temperature } from "./temperature.model";
import { Weather } from "./weather.model";

export class DayWeather {
    dt: number;
    weather: Weather[];
    main: Temperature;
}