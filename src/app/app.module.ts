import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertsPage } from '../pages/alerts/alerts';
import { SettingsPage } from '../pages/settings/settings';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SubmitPage } from '../pages/submit/submit';
import { TimetablePage } from '../pages/timetable/timetable';
import { ViewAdsPage } from '../pages/view-ads/view-ads';
import { ViewNewsPage } from '../pages/view-news/view-news';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertsPage,
    SubmitPage,
    TimetablePage,
    SettingsPage,
    ViewAdsPage,
    ViewNewsPage,
    AboutUsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertsPage,
    SubmitPage,
    TimetablePage,
    SettingsPage,
    ViewAdsPage,
    ViewNewsPage,
    AboutUsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    UserProvider,
  ]
})
export class AppModule {}
