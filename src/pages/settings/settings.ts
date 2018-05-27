import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  preferred_line: string;

  show_notifications: boolean;

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.loadSettings()
  }

  saveSettings() {
    this.storage.set('preferred_line', this.preferred_line);
    this.storage.set('show_notifications', this.show_notifications);
  }

  loadSettings() {
    this.storage.get('preferred_line').then((val) => {
      this.preferred_line = val;
    });
    this.storage.get('show_notifications').then((val) => {
      this.show_notifications = val;
    });
  }
}
