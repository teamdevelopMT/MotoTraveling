
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  options: GyroscopeOptions = {
    frequency: 1000
  }

  orientacionX: number;
  oritentacionY: number;
  orientationZ: number;
  tiempo: number;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private gyroscope: Gyroscope,
    private platfrom: Platform) {

  }

  iniciarCarrera() {

    if (this.platfrom.is('cordova')) {
      this.gyroscope.getCurrent(this.options)
        .then((orientation: GyroscopeOrientation) => {
          this.orientacionX = orientation.x;
          this.oritentacionY = orientation.y;
          this.orientationZ = orientation.z;
          this.tiempo = orientation.timestamp;
        })
        .catch()


      this.gyroscope.watch()
        .subscribe((orientation: GyroscopeOrientation) => {
          this.orientacionX = orientation.x;
          this.oritentacionY = orientation.y;
          this.orientationZ = orientation.z;
          this.tiempo = orientation.timestamp;
        });

    }
  }


}
