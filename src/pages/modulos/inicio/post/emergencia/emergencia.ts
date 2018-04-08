import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

@IonicPage()
@Component({
  selector: 'page-emergencia',
  templateUrl: 'emergencia.html',
})


export class EmergenciaPage {

  map: GoogleMap;
  tipEmergencia: string = 'propio';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
     
  }

  ionViewDidLoad() {
  
  }

    
  cerrar() {
    this.viewCtrl.dismiss();
  }
  Hora() {
    let fecha: any = new Date()
    let hora: any = fecha.getHours()
    let minuto: any = fecha.getMinutes()
    let segundo: any = fecha.getSeconds()

    if (hora < 10) { hora = "0" + hora }
    if (minuto < 10) { minuto = "0" + minuto }
    if (segundo < 10) { segundo = "0" + segundo }
    var horita = hora + ":" + minuto + ":" + segundo
    return horita;
  }
}
