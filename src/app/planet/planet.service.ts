import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';

import { People } from '../people/people';
import { Planet } from '../planet/planet';

@Injectable()
export class PlanetService {

  private urlPlanet = 'https://swapi.co/api/planets/';

  constructor(private http: Http) {}

  getPlanets(): Observable<Planet[]> {
    return this.http.get(this.urlPlanet)
      .map(
        res => res.json()
      );
  }

  getPlanetsByPage(page: String): Observable<Planet[]> {
    return this.http.get(this.urlPlanet)
      .map(
        res => res.json()
      );
  }

  getPlanetsById(id: String): Observable<Planet[]> {
    return this.http.get(this.urlPlanet)
      .map(
        res => res.json()
      );
  }
}