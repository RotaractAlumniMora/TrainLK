import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserProvider } from '../../providers/user/user';
import { RoutesProvider } from '../../providers/routes/routes';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  // Subscription based information
  _preferredRoute: string;

  startStation: string;

  endStation: string;

  notifySaturday: boolean;

  routes: any;

  hasStations: boolean;

  routeStations: any;

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    public toastCtrl: ToastController,
    public userProvider: UserProvider,
    public routesProvider: RoutesProvider
  ) {
    this.load()
  }

  load() {
    this.loadRoutes();
  }

  set preferredRoute(val) {
    if (this._preferredRoute != val) {
      this.hasStations = false;
      this._preferredRoute = val;
      this.loadRouteStations();
    }
  }

  get preferredRoute() {
    return this._preferredRoute;
  }

  loadRoutes() {
    this.routesProvider.getRoutes().subscribe(data => this.routes = data['routes']);
  }

  loadRouteStations() {
    this.routesProvider.getRouteStations(this.preferredRoute).subscribe(data => {
      this.routeStations = data['stations'];
      this.hasStations = this.routeStations.length > 0;
      if (this.hasStations) {
        this.startStation = this.routeStations[0];
        this.endStation = this.routeStations[0];
      }
    })
  }

  saveSubscriptions() {
    
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
