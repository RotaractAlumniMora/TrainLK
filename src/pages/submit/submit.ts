import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { Storage } from '@ionic/storage';
import { RoutesProvider } from '../../providers/routes/routes';

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
  public type: string;

  public trainId: string;

  public newsType: string;

  public delayTime: string;

  public departureTime: string;

  public routes: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private storage: Storage,
    public newsProvider: NewsProvider,
    public routesProvider: RoutesProvider
  ) {
    this.type = 'Delay';
    this.load();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitPage');
  }

  load() {
    this.routesProvider.getRoutes().subscribe(data => this.routes = data['routes']);
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
            var phoenNumber: string;
            this.storage.get('phoen_number').then((val) => {
              phoenNumber = val;
            });
            // Send the news submission using provider
            var status = this.newsProvider.addNews(phoenNumber, this.trainId, this.newsType, this.delayTime, this.departureTime);
            if (status == true) {
              let toast = this.toastCtrl.create({
                message: 'Thank you for your support.',
                duration: 3000
              });
              toast.present();
            } else {
              let toast = this.toastCtrl.create({
                message: 'Could not connect to the server. Please check your internet connection and try again.',
                duration: 3000
              });
              toast.present();
            }
          }
        }
      ]
    });
    return confirm.present();
  }
}
