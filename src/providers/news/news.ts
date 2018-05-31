import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {

  }

  load() {
    return new Promise(resolve => {
      this.http.post('http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/getnewsheadlines', 
      { 
        limit : 20,
      }, 
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .subscribe(data => {
        resolve(data['news_headlines']);
      }, err => {
        console.log(err);
      });
    });
  }
  
  loadNewsItem(id) {
    return new Promise(resolve => {
      this.http.post('http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/getnewsdetails', 
      { 
        id : id,
      }, 
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .subscribe(data => {
        resolve(data['news_details']);
      }, err => {
        console.log(err);
      });
    });
  }

  addNews(phoenNumber: string, trainId: string, newsType: string, delayTime: string, departureTime: string) {
      return false;
  }
}
