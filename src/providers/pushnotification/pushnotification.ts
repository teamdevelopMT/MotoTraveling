import { Injectable } from '@angular/core';
import { OneSignal, OSNotification } from '@ionic-native/onesignal';
import { Platform, App, NavPush, ModalController, Modal } from 'ionic-angular';


@Injectable()
export class PushnotificationProvider {
  nav: any;
  constructor(private oneSignal: OneSignal,
    private platform: Platform,
    private app: App,
    private modalCtrl: ModalController) {

    this.nav = app.getActiveNav();
  }


  InitNotification() {
    if (this.platform.is('cordova')) {
      this.oneSignal.startInit('0bc711c8-0f08-4a2b-90c5-bc37812cb9b9', '1017500417926');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe((res) => {
      });

      this.oneSignal.handleNotificationOpened().subscribe((res) => {
        this.modalCtrl.create('RoboListPage', { data: res }).present();
      });

      this.oneSignal.endInit();
    }
  }



}
