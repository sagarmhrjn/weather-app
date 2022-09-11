import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss'],
})
export class WeatherIconComponent implements OnInit {
  @Input() code!: string;
  @Input() styles!: string;
  
  constructor() {}

  ngOnInit(): void {}

  get weatherIcon() {
    return `http://openweathermap.org/img/wn/${this.code}@2x.png`;
  }
}
