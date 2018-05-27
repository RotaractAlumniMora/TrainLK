import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertsPage } from '../pages/alerts/alerts';
import { SettingsPage } from '../pages/settings/settings';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SubmitPage } from '../pages/submit/submit';
import { TimetablePage } from '../pages/timetable/timetable';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertsPage,
    SubmitPage,
    TimetablePage,
    SettingsPage,
    AboutUsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertsPage,
    SubmitPage,
    TimetablePage,
    SettingsPage,
    AboutUsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
