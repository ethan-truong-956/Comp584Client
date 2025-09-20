import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [
    CommonModule
  ],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
forecast: WeatherData[] = [];
  constructor(http: HttpClient) {
    http.get<WeatherData[]>('http://localhost:5093/weatherforecast').subscribe(result => {
      this.forecast = result;
    });
  }
}
