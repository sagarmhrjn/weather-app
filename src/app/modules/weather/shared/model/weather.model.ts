// dt is a utc timestamp and timezone is offset of that location.
export interface IWeather {
  coord: ICoordinate;
  main_weather: IMainWeather;
  name: string;
  dt: number;
  today_overview: ITodayWeather;
  current_weather: Array<ICurrentWeather>;
  wind: IWind;
  timezone: number;
}

export interface ICoordinate {
  lat: number;
  lon: number;
}

export interface IMainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface ICurrentWeather {
  description: string;
  icon: string;
  main: string;
}

export interface IWind {
  deg: number;
  speed: number;
}

export interface ITodayWeather {
  country: string;
  sunrise: string;
  sunset: string;
}
