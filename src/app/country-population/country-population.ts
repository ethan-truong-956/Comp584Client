import { Component } from '@angular/core';
import { PopulationData } from './population-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-country-population',
  imports: [],
  templateUrl: './country-population.html',
  styleUrl: './country-population.scss'
})
export class CountryPopulation {
 population!: PopulationData;
  constructor(http: HttpClient) {
    http.get<PopulationData>(environment.apiUrl + "api/Countries/population/").subscribe(result => {
      this.population = result;
    });
  }
}
