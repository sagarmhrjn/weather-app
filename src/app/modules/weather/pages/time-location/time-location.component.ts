import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-location',
  templateUrl: './time-location.component.html',
  styleUrls: ['./time-location.component.scss'],
})
export class TimeLocationComponent implements OnInit {
  @Input() weather: any;
  constructor() {}

  ngOnInit(): void {}
}
