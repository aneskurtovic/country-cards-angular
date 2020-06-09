import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const API_URL = 'https://restcountries.eu/rest/v2/all';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

constructor(private http: HttpClient) { }

getCountries() : Observable<Country[]> {

  let jsonCountries = this.http.get<Country[]>(API_URL);
  console.log(jsonCountries);
  return jsonCountries;
  
}

}
