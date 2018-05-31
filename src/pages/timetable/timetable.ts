import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TimetableProvider } from '../../providers/timetable/timetable';
/**
 * Generated class for the TimetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
  providers: [TimetableProvider]
})
export class TimetablePage {
  isAlertsLoaded: boolean;
  startTime: string;
  endTime: string;
  startLocation :string;
  endLocation :string;
  date :string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.LoadTimeTable();
  }

  LoadTimeTable() {
    let loader = this.loadingCtrl.create({
      content: "Alerts Loading...",
    });
    loader.present();
  
    this.isAlertsLoaded = true;

    loader.dismiss();
  }

}
