import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewNewsPage } from '../view-news/view-news';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NewsProvider]
})
export class HomePage {

  public news: any;

  constructor(public navCtrl: NavController, public newsProvider: NewsProvider) {
    this.loadNews();
  }

  loadNews() {
    this.newsProvider.load()
      .then(data => { 
        this.news= data;
      });
  }

  openNews(id) {
    this.navCtrl.push(ViewNewsPage, {'newsId': id});
  }

}
