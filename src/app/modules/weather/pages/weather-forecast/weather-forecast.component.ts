import { Component, Input, OnInit } from '@angular/core';
import { catchError, Subject, takeUntil, tap, throwError } from 'rxjs';
import { WeatherDataService } from '../../shared/service/weather-data.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  weatherIconStyle: string = 'w-12 my-1';

  @Input() title: string = 'hourly | weekly';
  @Input() items: any;

  unitName: string = '';
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
