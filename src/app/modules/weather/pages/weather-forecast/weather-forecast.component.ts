import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  weatherIconStyle: string = 'w-12 my-1';

  @Input() title: string = 'hourly | weekly';
  @Input() items: any;

  constructor() {}

  ngOnInit(): void {}
}
