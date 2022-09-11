import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, map, Observable } from 'rxjs';
import { IWeather } from '../model/weather.model';
import { FormatWeatherDataService } from './format-weather-data.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _formatWeatherDataService: FormatWeatherDataService
  ) {}

  getWeatherData(infoType: string, searchParams: any): Observable<IWeather> {
    const params = new URLSearchParams({ ...searchParams });
    return this._http.get<IWeather>(`${infoType}?${params}`);
  }

  getFormattedWeatherData(searchParams: any): Observable<any> {
    return this.getWeatherData('weather', searchParams).pipe(
      map((weatherData) =>
        this._formatWeatherDataService.formatCurrentWeather(weatherData)
      ),
      concatMap((formattedCurrentWeather) => {
        const lat = formattedCurrentWeather.coord.lat;
        const lon = formattedCurrentWeather.coord.lon;
        return this.getWeatherData('forecast', {
          lat,
          lon,
          exclude: 'current,minutely,alerts',
          units: searchParams.units,
          cnt: 40333,
        }).pipe(
          map((forecastData: any) => {
            const formattedForecastWeather =
              this._formatWeatherDataService.formatForecastWeather({
                ...forecastData,
                timezone: formattedCurrentWeather.timezone,
              });
            return { ...formattedCurrentWeather, ...formattedForecastWeather };
          })
        );
      })
    );
  }
}
