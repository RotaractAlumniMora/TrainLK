import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
  private newsUrl: string = 'https://randomuser.me/api/';

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews() {
    return this.http.get(this.newsUrl);
  }

  addNews(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ''
      })
    };
    return this.http.post(this.newsUrl, data, httpOptions);
  }

  handleError(f, data) {
    
  }
}
