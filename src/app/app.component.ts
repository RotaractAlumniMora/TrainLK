import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SubmitPage } from '../pages/submit/submit';
import { TimetablePage } from '../pages/timetable/timetable';
import { AlertsPage } from '../pages/alerts/alerts';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: { [title: string]: any };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = {};
    this.pages['Home'] = HomePage;
    this.pages['Alerts'] = AlertsPage;
    this.pages['Submit'] = SubmitPage;
    this.pages['Settings'] = SettingsPage;
    this.pages['Timetable'] = TimetablePage;
    this.pages['About Us'] = AboutUsPage;
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
}
