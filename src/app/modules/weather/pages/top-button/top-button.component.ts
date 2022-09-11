import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cityList } from '../../shared/mock-data/city';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss'],
})
export class TopButtonComponent implements OnInit {
  public cities = cityList;
  @Output() setQuery: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCityClick(city: string): void {
    this.setQuery.emit({ q: city });
  }
}
