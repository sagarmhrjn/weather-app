import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './pages/weather.component';
import { TopButtonComponent } from './pages/top-button/top-button.component';
import { SearchCityComponent } from './pages/search-city/search-city.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimeLocationComponent } from './pages/time-location/time-location.component';
import { TemperatureDetailsComponent } from './pages/temperature-details/temperature-details.component';
import { WeatherForecastComponent } from './pages/weather-forecast/weather-forecast.component';


@NgModule({
  declarations: [
    WeatherComponent,
    TopButtonComponent,
    SearchCityComponent,
    TimeLocationComponent,
    TemperatureDetailsComponent,
    WeatherForecastComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,

    SharedModule
  ]
})
export class WeatherModule { }
