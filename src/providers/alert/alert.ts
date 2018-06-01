import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(public http: HttpClient) {
  }

  load(line, date, type) {
    return new Promise(resolve => {
      this.http.post('http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/searchalerts', 
      { 
        "route_id" : line,
        "date" : date,
        "alert_type" : type
      }, 
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .subscribe(data => {
        resolve(data['status']);
      }, err => {
        console.log(err);
      });
    });
  }  

}
