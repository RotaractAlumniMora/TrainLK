import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewNewsPage } from '../view-news/view-news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openNews(id) {
    this.navCtrl.push(ViewNewsPage, {'newsId': id});
  }

}
