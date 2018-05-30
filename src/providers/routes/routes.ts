import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

/*
  Generated class for the RoutesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoutesProvider {
  urlRoutes = "http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/getroutes"
  urlRouteStations = "http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/getroutestations"


  constructor(public http: HttpClient) {
    console.log('Client provider constructed.');

  }

  getRoutes() {
    return this.http.get(this.urlRoutes);
  }

  getRouteStations(stationId) {
    return this.http.post(this.urlRouteStations, { 'route_id': stationId }, httpOptions);
  }
}
