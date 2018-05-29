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
      this.http.get('https://http://18.191.123.53:8080/getnewsheadlines?limit=20').subscribe(data => {
        resolve(data['news_headlines']);
      }, err => {
        console.log(err);
      });
    });
  }

  loadNewsItem() {
    return new Promise(resolve => {
      this.http.get('https://http://18.191.123.53:8080/getnewsdetails?id=20').subscribe(data => {
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
