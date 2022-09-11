import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root',
})
export class FormatWeatherDataService {
  constructor() {}

  formatForecastWeather(data: any) {
    const { timezone, list } = data;
    let daily = list;
    daily = daily.map((d: any) => {
      return {
        title: this.formatToLocalTime(d.dt, timezone, 'dddd'),
        temp: d.main.temp,
        icon: d.weather[0].icon,
      };
    });
    daily = this.removeDuplicateDay(daily);
    return { timezone, daily };
  }

  formatToLocalTime(
    secs: any,
    zone: any,
    format = 'dddd, MMMM Do YYYY, h:mm a'
  ) {
    const datetime = moment.unix(secs).utc().add(zone, 's').format(format);
    return datetime;
  }

  formatCurrentWeather(data: any) {
    const {
      coord,
      main: main_weather,
      name,
      dt,
      sys: today_overview,
      weather,
      wind,
      timezone,
    } = data;

    const { description: current_weather, icon } = weather[0];

    return {
      coord,
      current_weather,
      name,
      dt,
      today_overview,
      main_weather,
      wind,
      timezone,
      icon,
    };
  }

  removeDuplicateDay(arr: Array<any>) {
    const flags = new Set();
    return arr.filter((data) => {
      if (flags.has(data.title)) {
        return false;
      }
      flags.add(data.title);
      return true;
    });
  }
}
