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

  public delayUnit: string;

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
    this.trainsProvider
      // .getRouteTrains(this.railwayLine)
      .getAllTrains()
      .subscribe(data => {
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
      message: 'Do you agree to send varificatoin details?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            this.showToast('Submission failed.');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            var userId: string;
            this.storage.get('user_id').then((val) => {
              userId = val;
              // Send the news submission using provider
              let delayT;
              if (this.delayUnit == 'Hrs') {
                delayT = this.delayTime + 'h';
              } else {
                delayT = this.delayTime + 'min';
              }
              this.newsProvider.addNews(userId, this.trainId, this.type, delayT, this.departureTime).subscribe(data => {
                if (data['status']) {
                  let status = (data['status'] == 'STATUS_SUCCESS');
                  if (status) {
                    this.showToast('Thank you for your support.');
                  } else {
                    this.showToast('Record failed.');
                  }
                } else {
                  this.showToast('Record failed 2.');
                }
              });
            });
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
