import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { Storage } from '@ionic/storage';
import { RoutesProvider } from '../../providers/routes/routes';
import { TrainsProvider } from '../../providers/trains/trains';

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
  public _railwayLine: any;

  public type: string;

  public trainId: string;

  public newsType: string;

  public delayTime: string;

  public departureTime: string;

  public routes: any;

  public trains: any;

  public hasTrains: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private storage: Storage,
    public newsProvider: NewsProvider,
    public routesProvider: RoutesProvider,
    public trainsProvider: TrainsProvider,
  ) {
    this.type = 'Delay';
    this.load();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitPage');
  }

  load() {
    this.loadRoutes()
    this.hasTrains = false;
  }

  loadRoutes(): any {
    this.routesProvider.getRoutes().subscribe(data => this.routes = data['routes']);
  }

  get railwayLine() {
    return this._railwayLine;
  }

  set railwayLine(val) {
    this._railwayLine = val
    this.loadTrains();
  }

  loadTrains() {
    this.trainsProvider.getAllTrains().subscribe(data => {
      this.trains = data['trains']
      if (this.trains) {
        this.hasTrains = this.trains.length > 0
      } else {
        this.hasTrains = false;
      }
    });
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
            var status = false;
            this.showToast(this.trainId);
            this.newsProvider.addNews(phoenNumber, this.trainId, this.newsType, this.delayTime, this.departureTime);
            if (status) {
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

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
