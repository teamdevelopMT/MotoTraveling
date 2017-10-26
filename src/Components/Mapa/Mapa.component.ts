import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 import { AngularFireDatabase } from 'angularfire2/database';
 import { Observable } from 'rxjs/Observable';

 /*Interfaces*/
 import { rutas } from "../../Interfaces/rutas";

declare var google;


@Component({
  selector: 'mapa-component',
  templateUrl: 'Mapa.component.html'
})
export class MapaComponent {
  latitudActual : number;
  longitudActual: number;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;
  marker2: any;
  start="chicago, il";
  end = "los angeles, ca";
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  ruta : rutas;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private afDB: AngularFireDatabase) {
    let watch = this.geolocation.watchPosition();
    
    this.geolocation.getCurrentPosition().then((data) => {
        var parent = this;
        parent.latitudActual = data.coords.latitude;
        parent.longitudActual = data.coords.longitude;

        this.initMap();
     }).catch((error) => {
        console.log('Error getting location', error);
     });


    watch.subscribe((data) => {
      var parent = this;
      this.map.setCenter({lat: parseFloat(data.coords.latitude.toString()), lng: parseFloat(data.coords.longitude.toString())});
      this.marker.setPosition({lat: parseFloat(data.coords.latitude.toString()), lng: parseFloat(data.coords.longitude.toString())});
     });

     let promesa = new Promise((resolve, reject) => {
      const resultadoConsultaFire = this.afDB.object('rutas/josedaniel9_5hotmailcom').valueChanges();

      resultadoConsultaFire.subscribe(resp =>{
          this.ruta = (resp as rutas);
          
          this.marker2 = new google.maps.Marker({
            title: 'otro Usuario',
            animation: 'DROP',
            map: this.map,
            position: {
              lat: 4.510885,
              lng: -74.1159012
            }
          });


          this.marker2.setPosition({lat: parseFloat("4.5109422"), lng: parseFloat("-74.1194116")});
          
      });

  });

  }


  initMap() {
    var parent = this;
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 19,
      center: {lat: parent.latitudActual, lng: parent.longitudActual}
    });

    this.marker = new google.maps.Marker({
      title: 'Mi posición',
      animation: 'DROP',
      map: this.map,
      position: {
        lat: parent.latitudActual,
        lng: parent.longitudActual
      }
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


  testCambioUbicacion(){
    this.map.setCenter({lat: parseFloat(this.latitudActual.toString()), lng: parseFloat(this.longitudActual.toString())});
    this.marker.setPosition({lat: parseFloat(this.latitudActual.toString()), lng: parseFloat(this.longitudActual.toString())});
    console.log("lat: "+this.latitudActual + " , longitud:"+this.longitudActual);
  }

}