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
  isAlertsLoaded: boolean;
  preferred_line: string;
  notify_type: string;
  notify_days :string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }


  submitForm() {
    let loader = this.loadingCtrl.create({
      content: "Alerts Loading...",
    });
    loader.present();
  
    this.isAlertsLoaded = true;

    loader.dismiss();
  }


}
