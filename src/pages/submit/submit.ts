import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the SubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-submit',
  templateUrl: 'submit.html',
})
export class SubmitPage {
  public data: any;

  public type: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public newsProvider: NewsProvider) {
    this.type = 'Delay';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitPage');
  }

  submitForm() {
    let confirm = this.alertCtrl.create({
      title: 'Varification needed',
      message: 'Do you agree to send your phone number for varification purposes?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            let toast = this.toastCtrl.create({
              message: 'Submission failed.',
              duration: 3000
            });
            toast.present();
          }
        },
        {
          text: 'Agree',
          handler: () => {
            // Send the news submission using provider

            let toast = this.toastCtrl.create({
              message: 'Thank you for your support.',
              duration: 3000
            });
            toast.present();
          }
        }
      ]
    });
    return confirm.present();
  }
}
