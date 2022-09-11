import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatToLocalTimePipe } from './pipes/format-to-local-time.pipe';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [FormatToLocalTimePipe, WeatherIconComponent, SpinnerComponent],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormatToLocalTimePipe,
    WeatherIconComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
