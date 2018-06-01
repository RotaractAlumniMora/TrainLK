import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertProvider } from '../../providers/alert/alert';

/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
  providers: [AlertProvider]
})
export class AlertsPage {
  isAlertsLoaded: boolean;
  preferred_line: string;
  notify_type: string;
  notify_days: string;
  alerts: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {
  }

  submitForm() {
    const toast = this.toastCtrl.create({
      message: this.preferred_line + ' ' + this.notify_days + ' ' + this.notify_type,
      duration: 3000
    });
    toast.present();
    if (!this.preferred_line || !this.notify_days || !this.notify_type) {
      /*
      const toast = this.toastCtrl.create({
        message: 'All fields are required fields',
        duration: 3000
      });
      toast.present();
      */
    }

    let loader = this.loadingCtrl.create({
      content: "Alerts Loading...",
      duration: 3000
    });
    loader.present();
    this.alertCtrl.load(this.preferred_line, this.notify_days, this.notify_type)
      .then(data => {
        this.alerts = data;
        this.isAlertsLoaded = true;
      });
    loader.dismiss();
  }
}
