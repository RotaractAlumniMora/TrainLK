import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SubmitPage } from '../pages/submit/submit';
import { TimetablePage } from '../pages/timetable/timetable';
import { AlertsPage } from '../pages/alerts/alerts';

import { Slides } from 'ionic-angular';
import { UserProvider } from '../providers/user/user';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AlertProvider } from '../providers/alert/alert';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  firstTime: boolean;

  username: string;

  @ViewChild(Slides) slides: Slides;

  pages: { [title: string]: any };

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public userProvider: UserProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    private localNotifications: LocalNotifications,
    public alertCtrl: AlertProvider,
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = {};
    this.pages['Home'] = HomePage;
    this.pages['Alerts'] = AlertsPage;
    this.pages['Submit'] = SubmitPage;
    this.pages['Settings'] = SettingsPage;
    this.pages['Timetable'] = TimetablePage;
    this.pages['About Us'] = AboutUsPage;
    this.loadUser();
    /*
    // Schedule delayed notification
    this.localNotifications.schedule({
      text: 'Trains from Polgahawela to Colombo Fort delayed.',
      trigger: { at: new Date(new Date().getTime() + 60000) },
      led: 'FF0000',
      sound: null
    });
    */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(this.pages[page]);
  }

  loadUser() {
    this.firstTime = true;
    this.username = '';
    this.storage.get('username').then((val) => {
      this.username = val;
      if (this.username && this.username != '') {
        this.firstTime = false;
        this.showToast('User varified ' + this.username);
      } else {
        this.firstTime = true;
      }
    });
  }

  saveUser(id, name) {
    this.storage.set('user_id', id);
    this.storage.set('username', name);
    this.loadUser();
  }

  registerUser() {
    // this.firstTime = !this.userProvider.addUser(this.username);
    if (this.validateUser()) {
      let userId;
      this.userProvider.addUser(this.username).subscribe(
        data => {
          if (data['status']) {
            let status = data['status'] == 'STATUS_SUCCESS';
            if (status) {
              userId = data['user_id'];
              this.saveUser(userId, this.username);
            } else {
              this.handleError(3);
            }
          } else {
            this.handleError(2);
          }
        },
        error => {
          this.handleError(0);
        }
      );
    } else {
      this.handleError(1);
    }
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  validateUser() {
    if (this.username == '') {
      return false;
    }
    return true;
  }

  handleError(err) {
    if (err == 0) {
      this.showToast('Unable to create user account. Please retry with another name.');
    } else if (err == 1) {
      this.showToast('Please fill your name.')
    } else if (err == 2) {
      this.showToast('Unknown object recieved. Please contact developers for further instructions.')
    } else {
      this.showToast('Server Error.')
    }
  }
}
