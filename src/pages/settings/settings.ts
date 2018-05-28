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

  notify_weekdays: boolean;

  notify_saturdays: boolean;

  notify_sundays: boolean;

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.loadSettings()
  }

  saveSettings() {
    this.storage.set('preferred_line', this.preferred_line);
    this.storage.set('show_notifications', this.show_notifications);
    this.storage.set('notify_weekdays', this.notify_weekdays);
    this.storage.set('notify_saturdays', this.notify_saturdays);
    this.storage.set('notify_sundays', this.notify_sundays);
  }

  loadSettings() {
    this.storage.get('preferred_line').then((val) => {
      this.preferred_line = val;
    });
    this.storage.get('show_notifications').then((val) => {
      this.show_notifications = val;
    });
    this.storage.get('notify_weekdays').then((val) => {
      this.notify_weekdays = val;
    });
    this.storage.get('notify_saturdays').then((val) => {
      this.notify_saturdays = val;
    });
    this.storage.get('notify_sundays').then((val) => {
      this.notify_sundays = val;
    });
  }
}
