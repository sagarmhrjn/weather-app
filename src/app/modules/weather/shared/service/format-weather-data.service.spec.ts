import { TestBed } from '@angular/core/testing';

import { FormatWeatherDataService } from './format-weather-data.service';

describe('FormatWeatherDataService', () => {
  let service: FormatWeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatWeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
