import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TimetableProvider } from '../../providers/timetable/timetable';
import { ToastController } from 'ionic-angular';
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
  isTrainsLoaded: boolean;
  startTime: string;
  endTime: string;
  startLocation: string;
  endLocation: string;
  date: string;
  trains: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public timeTableProvider: TimetableProvider, public toastCtrl: ToastController) {

  }

  submitForm() {

    if (!this.startLocation || !this.endTime || !this.endLocation || !this.startTime || !this.date) {
      const toast = this.toastCtrl.create({
        message: 'All fields are required fields',
        duration: 3000
      });
      toast.present();
    }

    let loader = this.loadingCtrl.create({
      content: "Timetable Loading...",
      duration: 3000
    });
    loader.present();
    this.timeTableProvider.load(this.startLocation, this.endLocation, this.startTime, this.endTime, this.date)
      .then(data => {
        this.trains = data;
        this.isTrainsLoaded = true;
        loader.dismiss();
      });
  }

}
