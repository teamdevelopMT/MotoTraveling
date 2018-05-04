import { Injectable } from '@angular/core';
import { OneSignal, OSNotification } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal,
    private platform: Platform) {
  }

  InitNotification() {
    if (this.platform.is('cordova')) {
      this.oneSignal.startInit('0bc711c8-0f08-4a2b-90c5-bc37812cb9b9', '1017500417926');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();
    } 
  }



}
