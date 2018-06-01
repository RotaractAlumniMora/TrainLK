import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable } from '@angular/core';
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
import { NewsItemsProvider } from '../providers/news-items/news-items';
import { AlertProvider } from '../providers/alert/alert';
import { TimetableProvider } from '../providers/timetable/timetable';
import { RoutesProvider } from '../providers/routes/routes';
import { TrainsProvider } from '../providers/trains/trains';
import { LocalNotifications } from '@ionic-native/local-notifications';

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
    NewsItemsProvider,
    AlertProvider,
    TimetableProvider,
    RoutesProvider,
    TrainsProvider,
    LocalNotifications,
  ]
})
export class AppModule {}
