import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewNewsPage } from '../view-news/view-news';
import { NewsProvider } from '../../providers/news/news';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NewsProvider]
})
export class HomePage {

  public news: any;

  constructor(public navCtrl: NavController, public newsProvider: NewsProvider, public loadingCtrl: LoadingController) {
    this.loadNews();
  }

  loadNews() {
    let loader = this.loadingCtrl.create({
      content: "Please Wait",
    });
    loader.present();
    this.newsProvider.load()
      .then(data => {
        this.news = data;
        loader.dismiss();
      });
  }

  openNews(id) {
    this.navCtrl.push(ViewNewsPage, { 'newsId': id });
  }

}
