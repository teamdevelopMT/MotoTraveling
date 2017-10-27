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
 import { rutaUsuarios } from "../../Interfaces/rutaUsuarios";
 import { ubicacionUsuarios } from "../../Interfaces/ubicacionUsuarios";

declare var google;


@Component({
  selector: 'mapa-component',
  templateUrl: 'Mapa.component.html'
})
export class MapaComponent {
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;
  
  start="chicago, il";
  end = "los angeles, ca";
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  ruta : rutas;
  rutaUsuarios : rutaUsuarios[];
  ubicacionActual : ubicacionUsuarios = new ubicacionUsuarios();;
  ubicacionActualGuardar : ubicacionUsuarios = new ubicacionUsuarios();;
  constructor(public navCtrl: NavController, private geolocation: Geolocation, private afDB: AngularFireDatabase) {
    const watch = this.geolocation.watchPosition();

    this.geolocation.getCurrentPosition().then((data) => {
        var parent = this;
        parent.ubicacionActualGuardar.latitud = data.coords.latitude;
        parent.ubicacionActualGuardar.longitud = data.coords.longitude;
        parent.ubicacionActualGuardar.fechaUltimaUbicacion = new Date().toString();

        this.afDB.object('ubicacionUsuarios/teamdevelopmtgmailcom').update(parent.ubicacionActualGuardar);

        let promesa = new Promise((resolve, reject) => {
        const resultadoUbicacionActual = this.afDB.object('ubicacionUsuarios/teamdevelopmtgmailcom').valueChanges();
        const resultadoRutasFire = this.afDB.object('rutas/josedaniel9_5hotmailcom').valueChanges();

        resultadoUbicacionActual.subscribe(resp =>{
        parent.ubicacionActual = (resp as ubicacionUsuarios);
      

          resultadoRutasFire.subscribe(resp =>{
            this.ruta = (resp as rutas);
            var parent = this;
            this.initMap();


          const resultadoRutasUsuarios = this.afDB.list('rutas/josedaniel9_5hotmailcom/rutaUsuarios').valueChanges();
          resultadoRutasUsuarios.subscribe(rutasUs =>{
            this.rutaUsuarios = (rutasUs as rutaUsuarios[]);
            {
              if(this.rutaUsuarios != null && this.rutaUsuarios.length != 0)
                {
                  this.rutaUsuarios.forEach(element => {
                   var marker2: any;
                    marker2 = new google.maps.Marker({
                    title: element.nombre,
                    animation: 'DROP',
                    map: this.map,
                    position: {
                      lat: parseFloat(element.latitud),
                      lng: parseFloat(element.longitud)
                    }
                    });
                });
              }
          }
        });
          this.directionsDisplay.setMap(this.map);
          
      });
    });

  });

     }).catch((error) => {
        console.log('Error getting location', error);
     });


    watch.subscribe((data) => {
      var parent = this;
      parent.ubicacionActualGuardar.latitud = parseFloat(data.coords.latitude.toString());
      parent.ubicacionActualGuardar.longitud = parseFloat(data.coords.longitude.toString());
      parent.ubicacionActualGuardar.fechaUltimaUbicacion = new Date().toString();
      this.afDB.object('ubicacionUsuarios/teamdevelopmtgmailcom').update(parent.ubicacionActualGuardar)
    });

     

  }


  initMap() {
    var parent = this;
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 19,
      center: {lat: parent.ubicacionActual.latitud, lng: parent.ubicacionActual.longitud}
    });

    this.marker = new google.maps.Marker({
      title: 'Mi posición',
      animation: 'DROP',
      map: this.map,
      position: {
        lat: parent.ubicacionActual.latitud,
        lng: parent.ubicacionActual.longitud
      }
    });

    
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




}