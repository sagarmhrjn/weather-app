import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { WeatherDataService } from '../../shared/service/weather-data.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss'],
})
export class SearchCityComponent implements OnInit {
  public faSearch = faSearch;
  public faLocationDot = faLocationDot;
  public searchCityForm: FormGroup;

  @Input() units: string = 'metric | imperial';
  @Output() setQuery: EventEmitter<any> = new EventEmitter();
  @Output() setUnits: EventEmitter<any> = new EventEmitter();

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _weatherDataService: WeatherDataService
  ) {
    this.searchCityForm = this._fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this._weatherDataService.sendUnitName('metric');
  }

  handleUnitsChange(value: any) {
    const selectedUnit = value;
    if (this.units !== selectedUnit) {
      this.setUnits.emit(selectedUnit);
      this._weatherDataService.sendUnitName(value);
    }
  }

  handleSearchClick() {
    const city = this.searchCityForm.get('name')?.value;
    if (city !== '') this.setQuery.emit({ q: city });
  }

  handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        this.setQuery.emit({
          lat,
          lon,
        });
      });
      this.searchCityForm.reset();
    }
  };
}
