import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
  urlAddNews = 'http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/addnews';

  constructor(public http: HttpClient) {

  }

  load() {
    return new Promise(resolve => {
      this.http.post('http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/getnewsheadlines',
        {
          limit: 20,
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
          id: id,
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

  addNews(userId: string, trainId: string, newsType: string, delayTime: string, departureTime: string) {
    let data;
    if (newsType == 'Delay') {
      data = {
        'user_id': userId,
        'train_id': trainId,
        'news_type': newsType,
        'message': delayTime
      }
    } else if (newsType == 'Late Departure') {
      data = {
        'user_id': userId,
        'train_id': trainId,
        'news_type': newsType,
        'message': departureTime
      }
    } else {
      data = {
        'user_id': userId,
        'train_id': trainId,
        'news_type': newsType,
        'message': ''
      }
    }
    return this.http.post(this.urlAddNews, data, httpOptions);
  }
}
