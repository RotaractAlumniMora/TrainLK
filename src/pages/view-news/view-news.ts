import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the ViewNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-news',
  templateUrl: 'view-news.html',
})
export class ViewNewsPage {
  newsItem: any;
  newsId: any;
  isNewsSet : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public newsProvider: NewsProvider) {
    this.newsId = navParams.get('newsId');
    this.load();
  }

  load() {
    this.newsProvider.load()
      .then(data => { 
        this.newsItem = data;
        this.isNewsSet = true;
      });
    }
}
