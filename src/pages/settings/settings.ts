import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../model/User';
import { UserProvider } from '../../providers/user/user';

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

  user: User;

  constructor(public navCtrl: NavController, private storage: Storage, public toastCtrl: ToastController, public userProvider: UserProvider) {
    this.load()
  }

  load() {
    this.loadUser();
    this.loadSettings();
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

  loadUser() {
    let phone_number = '';
    let username = '';
    this.storage.get('phone_number').then((val) => {
      phone_number = val;
    });
    this.storage.get('username').then((val) => {
      username = val;
    });
    this.user = new User(username, phone_number);
  }

  updateUser() {
    var msg;
    if (this.user.originalName == this.user.tempName) {
      if (this.user.originalPhoneNumber == this.user.tempPhoneNumber) {
        // no change
        msg = 'You haven\t changed anything yet.';
      } else {
        // phone number updated
        var status = this.userProvider.updateUserPhone(this.user.originalPhoneNumber, this.user.tempPhoneNumber);
        if (status) {
          msg = 'Update Success.';
          this.user = new User(this.user.tempName, this.user.tempPhoneNumber)
          this.storage.set('phone_number', this.user.phoneNumber);
        } else {
          msg = 'Phone number update failed.';
        }
      }
    } else {
      if (this.user.originalPhoneNumber == this.user.tempPhoneNumber) {
        // name updated
        var status = this.userProvider.updateUserName(this.user.originalName, this.user.tempName);
        if (status) {
          msg = 'Update Success.';
          this.user = new User(this.user.tempName, this.user.tempPhoneNumber)
          this.storage.set('username', this.user.originalName);
        } else {
          msg = 'User name update failed.';
        }
      } else {
        // New user
        var status = this.userProvider.addUser(this.user.tempName, this.user.tempPhoneNumber);
        if (status) {
          msg = 'Successfully created new user.';
          this.storage.set('username', this.user.tempName);
          this.storage.set('phone_number', this.user.tempPhoneNumber);
          this.user = new User(this.user.tempName, this.user.tempPhoneNumber)
        } else {
          msg = 'Unable to create user.';
        }
      }
    }
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
