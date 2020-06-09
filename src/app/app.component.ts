import { Component, OnInit } from '@angular/core';
import { CountryService } from '../app/services/country.service';
import { Country } from './interfaces/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'country-cards-angular';
  countries: Country[];

  constructor(private countryService : CountryService) {
    
  }
  ngOnInit(): void {
    this.countryService.getCountries()
              .subscribe(x => console.log(x));
  }
}
