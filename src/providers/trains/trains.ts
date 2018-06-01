import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

/*
  Generated class for the TrainsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrainsProvider {
  urlAllTrains = 'http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/getalltrains'
  urlRouteTrains = 'http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/getalltrains'

  constructor(public http: HttpClient) {
    console.log('Trains provider constructed.');
  }

  getAllTrains() {
    return this.http.get(this.urlAllTrains);
  }

  getRouteTrains(routeId) {
    return this.http.post(this.urlRouteTrains, { 'route_id': routeId }, httpOptions);
  }
}
