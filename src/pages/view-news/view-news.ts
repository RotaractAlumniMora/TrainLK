import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  newsId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.newsId = navParams.get('newsId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewNewsPage');
  }

}
