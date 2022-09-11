import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  faDroplet,
  faTemperatureThreeQuarters,
  faWind,
  faSun,
  faCloudSun,
} from '@fortawesome/free-solid-svg-icons';
import { catchError, Subject, takeUntil, tap, throwError } from 'rxjs';
import { WeatherDataService } from '../../shared/service/weather-data.service';

@Component({
  selector: 'app-temperature-details',
  templateUrl: './temperature-details.component.html',
  styleUrls: ['./temperature-details.component.scss'],
})
export class TemperatureDetailsComponent implements OnInit, OnDestroy {
  faTemperatureThreeQuarters = faTemperatureThreeQuarters;
  faDroplet = faDroplet;
  faWind = faWind;
  faSun = faSun;
  faCloudSun = faCloudSun;
  weatherIconStyle = 'w-20';
  unitName: string = '';

  @Input() weather: any;
  private readonly _destroy$ = new Subject<void>();

  constructor(private readonly _weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    this._weatherDataService.getUnitName
      .pipe(
        tap((value) => (this.unitName = value)),
        catchError((err) => {
          return throwError(() => err);
        }),
        takeUntil(this._destroy$)
      )

      .subscribe();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
