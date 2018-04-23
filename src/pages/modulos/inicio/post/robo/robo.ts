import { Component } from '@angular/core';
import { IonicPage, ViewController, Platform } from 'ionic-angular';
import { OneSignal, OSNotification } from '@ionic-native/onesignal';
import { Http, Headers, RequestOptions } from "@angular/http";

/**
 * Generated class for the RoboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-robo',
  templateUrl: 'robo.html',
})
export class RoboPage {

  constructor(public viewCtrl: ViewController,
    private oneSignal: OneSignal,
    private platform: Platform,
    private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoboPage');
  }

  Cerrar() {
    this.viewCtrl.dismiss();

  }
  AlertaRobo() {
    var body = {
      app_id: '0bc711c8-0f08-4a2b-90c5-bc37812cb9b9',
      template_id: '0cc2e67b-8be9-495d-806d-69e031080348',
      included_segments: ["All"],
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Basic MTc1ZmU0MmEtNTkxNy00MmY2LWJmNDMtYTdiNDU0MDQyMTRk');

    const options = new RequestOptions({headers:headers});
    this.http.post('https://onesignal.com/api/v1/notifications', body, options).subscribe(data => {
    console.log(data);
    this.viewCtrl.dismiss();
}, error => {
  console.log(error);
});

  }


}
