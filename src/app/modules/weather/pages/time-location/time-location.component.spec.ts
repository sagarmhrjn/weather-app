import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLocationComponent } from './time-location.component';

describe('TimeLocationComponent', () => {
  let component: TimeLocationComponent;
  let fixture: ComponentFixture<TimeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
