import { Component } from '@angular/core';
import { NavController, NavParams,  AlertController, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {
  hideMe: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }

  submitForm() {
    let loader = this.loadingCtrl.create({
      content: "Alerts Loading...",
      duration: 3000
    });
    loader.present();
    this.hideMe = true;
  }


}
