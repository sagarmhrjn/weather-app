import { Component, OnInit } from '@angular/core';
import {
  catchError,
  finalize,
  map,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { IWeather } from '../shared/model/weather.model';
import { WeatherService } from '../shared/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  public query = { q: 'kathmandu' };
  public units = 'metric';
  public weather$!: Observable<any>;
  public error$!: Observable<any>;
  isLoading: boolean = false;
  backgroundColor: string = '';

  constructor(private readonly _weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeather();
  }

  fetchWeather() {
    this.isLoading = true;
    this.weather$ = this._weatherService
      .getFormattedWeatherData({
        ...this.query,
        units: this.units,
      })
      .pipe(
        tap((data) => {
          this.backgroundColor = this.formatBackground(data);
        }),
        finalize(() => (this.isLoading = false)),
        catchError((err) => {
          this.error$ = of(err).pipe(map((data) => data.error));
          return throwError(err);
        })
      );
  }

  onSetCity(event: any): void {
    this.query = event;
    this.fetchWeather();
  }

  onUnitChange(value: string): void {
    this.units = value;
    this.fetchWeather();
  }

  formatBackground(weather: IWeather) {
    if (!weather) return 'from-cyan-700 to-blue-700';
    const threshold = this.units === 'metric' ? 20 : 60;
    if (weather.main_weather.temp <= threshold)
      return 'from-cyan-700 to-blue-700';

    return 'from-yellow-700 to-orange-700';
  }
}
