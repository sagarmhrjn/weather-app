import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private unitNameSource$ = new BehaviorSubject<string>('');

  getUnitName = this.unitNameSource$.asObservable();

  constructor() {}

  sendUnitName(value: string) {
    const unitName = value == 'metric' ? 'C' : 'F';
    console.log(unitName)
    this.unitNameSource$.next(unitName);
  }
}
