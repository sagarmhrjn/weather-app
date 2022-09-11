import { Component, Input, OnInit } from '@angular/core';
import {
  faDroplet,
  faTemperatureThreeQuarters,
  faWind,
  faSun,
  faCloudSun,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-temperature-details',
  templateUrl: './temperature-details.component.html',
  styleUrls: ['./temperature-details.component.scss'],
})
export class TemperatureDetailsComponent implements OnInit {
  faTemperatureThreeQuarters = faTemperatureThreeQuarters;
  faDroplet = faDroplet;
  faWind = faWind;
  faSun = faSun;
  faCloudSun = faCloudSun;
  weatherIconStyle = 'w-20';

  @Input() weather: any;

  constructor() {}

  ngOnInit(): void {}
}
