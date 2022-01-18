import axios from "axios";
import { getDefaultCompilerOptions } from "typescript";
import { WeatherMapResponse} from "../models/weather-map";

export function fetchWeatherMap(): Promise<WeatherMapResponse> {
    return axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
           q: "detroit",
           appId: "xxxxxxxxx"
        }
    })
    .then(res => res.data);
}