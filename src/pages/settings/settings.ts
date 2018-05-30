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
  // User Related informartion
  userName: string;

  // Subscription based information
  _preferredRoute: string;

  startStation: string;

  endStation: string;

  notifySaturday: boolean;

  routes: any;

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
    this.loadUser();
  }

  set preferredRoute(val) {
    if (this._preferredRoute != val) {
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
      this.startStation = this.routeStations[0];
      this.endStation = this.routeStations[0];
    })
  }

  loadUser() {
    this.storage.get('user_name').then((val) => {
      this.userName = val;
    });
  }

  updateUser() {
    this.storage.set('user_name', this.routeStations);
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
