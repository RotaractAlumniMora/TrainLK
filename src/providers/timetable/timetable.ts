import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TimetableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimetableProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TimetableProvider Provider');
  }

  load(startLocation, endLocation, startTime, endTime, date) {

    return new Promise(resolve => {
      this.http.post('http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/searchtrains', 
      { 
        "lang":"en",
        "startStationID":startLocation,
        "endStationID": endLocation,
        "searchDate":date,
        "startTime":startTime,
        "endTime":endTime
      }, 
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .subscribe(data => {
        resolve(data['RESULTS']['directTrains']['trainsList']);
      }, err => {
        console.log(err);
      });
    });
  }
  

}
