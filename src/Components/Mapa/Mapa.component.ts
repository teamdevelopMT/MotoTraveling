import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 import { AngularFireDatabase,AngularFireObject } from 'angularfire2/database';
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
  markers: any[] = new Array<any>();
  
  metodoMapa = "ruta";

  start="chicago, il";
  end = "los angeles, ca";
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  ruta : rutas;
  rutaUsuario : rutaUsuarios = new rutaUsuarios();
  rutaUsuarios : rutaUsuarios[];
  ubicacionActual : ubicacionUsuarios = new ubicacionUsuarios();
  ubicacionActualGuardar : ubicacionUsuarios = new ubicacionUsuarios();
  nombreUsuarioSession:string;
  mapaCreado: boolean = false;
  marcadoresCreados : boolean = false;
  objRutasCasteoFire : AngularFireObject<rutas>;
  constructor(public navCtrl: NavController, private geolocation: Geolocation, private afDB: AngularFireDatabase, private storage: Storage) {
    
    const watch = this.geolocation.watchPosition();

  

    storage.get('nombreUsuario').then((val) => {
      this.nombreUsuarioSession = val;
      var parent = this;
      this.geolocation.getCurrentPosition().then((data) => {
        
          if(this.metodoMapa == "ruta")
          {
              //Si se abrio el mapa por ruta se obtiene y actualiza la ubicacion del usuario en la ruta

              parent.rutaUsuario.latitud = data.coords.latitude.toString();
              parent.rutaUsuario.longitud = data.coords.longitude.toString();;
              parent.rutaUsuario.nombre = this.nombreUsuarioSession;

              this.afDB.object('rutas/josedaniel9_5hotmailcom/rutaUsuarios/'+this.nombreUsuarioSession).update(parent.rutaUsuario);


              let promesa = new Promise((resolve, reject) => {
                
                    this.objRutasCasteoFire = this.afDB.object('rutas/josedaniel9_5hotmailcom');

                    var parent = this;
                  
                    if(!this.mapaCreado)
                    {
                        this.crearMapa(data.coords.latitude, data.coords.longitude);
                    }
                  
        
                    
                  const resultadoRutasUsuarios = this.afDB.list('rutas/josedaniel9_5hotmailcom/rutaUsuarios').valueChanges();
                  resultadoRutasUsuarios.subscribe(rutasUs =>{
                    this.rutaUsuarios = (rutasUs as rutaUsuarios[]);
                    {
                      if(this.rutaUsuarios != null && this.rutaUsuarios.length != 0)
                        {
                          this.rutaUsuarios.forEach(element => {
                           
                          if(!this.marcadoresCreados)
                          {


                            var image = new google.maps.MarkerImage(
                              '../../assets/img/moto_250.png',
                              new google.maps.Size(100, 100),
                              new google.maps.Point(0, 0),
                              new google.maps.Point(17, 34),
                              new google.maps.Size(80, 80));
                              

                                this.marker = new google.maps.Marker({
                                title: element.nombre,
                                Snippet: element.nombre,
                                map: this.map,
                                icon : image,
                                label: element.nombre,
                                animation: 'DROP',
                                position: 
                                {
                                  lat: parseFloat(element.latitud),
                                  lng: parseFloat(element.longitud)
                                }
                                });

                                if(this.marker.title != null && this.marker != undefined)
                                this.markers.push(this.marker);
                          }
                          else
                          {
                              
                              var latlng = new google.maps.LatLng(parseFloat(element.latitud), parseFloat(element.longitud));
                          
                            
                              this.markers.forEach(marcador => {
                                  if(marcador.title == element.nombre)
                                    {
                                      marcador.setPosition(latlng);
                                    }
                              });

                          }
                        });
                            this.marcadoresCreados= true;
                        
                      }
                  }

                  
              });
            
            });
          
          }
          else
          {
              //Si se abrio el mapa por solitario se obtiene y actualiza la ubicacion en los datos generales del usuario

              parent.ubicacionActualGuardar.latitud = data.coords.latitude;
              parent.ubicacionActualGuardar.longitud = data.coords.longitude;
              parent.ubicacionActualGuardar.fechaUltimaUbicacion = new Date().toString();

              this.afDB.object('ubicacionUsuarios/'+this.nombreUsuarioSession).update(this.ubicacionActualGuardar);

              let promesa = new Promise((resolve, reject) => {
                const resultadoUbicacionActual = this.afDB.object('ubicacionUsuarios/'+this.nombreUsuarioSession).valueChanges();

                resultadoUbicacionActual.subscribe(resp =>{
                  parent.ubicacionActual = (resp as ubicacionUsuarios);
                  
                  
                  this.crearMapa(parent.ubicacionActual.latitud, parent.ubicacionActual.longitud);

                    


                  this.marker = new google.maps.Marker({
                    title: 'Mi posición',
                    animation: 'DROP',
                    map: this.map,
                    icon : 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
                    color: 'blue',
                    position: {
                      lat: parent.ubicacionActual.latitud,
                      lng: parent.ubicacionActual.longitud
                    }
                  });

                });

              });
          }

     }).catch((error) => {
        console.log('Error getting location', error);
     });

    });

    
    watch.subscribe((data) => {
      var parent = this;

      storage.get('nombreUsuario').then((val) => {
        if(this.metodoMapa == "ruta")
        {
            //Si se abrio el mapa por ruta se obtiene y actualiza la ubicacion del usuario en la ruta
            parent.rutaUsuario.latitud = data.coords.latitude.toString();
            parent.rutaUsuario.longitud = data.coords.longitude.toString();;
            parent.rutaUsuario.nombre = val;

            this.afDB.object('rutas/josedaniel9_5hotmailcom/rutaUsuarios/'+val).update(parent.rutaUsuario);



        }
        else
        {
            //Si se abrio el mapa por solitario se obtiene y actualiza la ubicacion en los datos generales del usuario
            parent.ubicacionActualGuardar.latitud = parseFloat(data.coords.latitude.toString());
            parent.ubicacionActualGuardar.longitud = parseFloat(data.coords.longitude.toString());
            parent.ubicacionActualGuardar.fechaUltimaUbicacion = new Date().toString();
            
            this.afDB.object('ubicacionUsuarios/'+val).update(parent.ubicacionActualGuardar);
        }
      });
    });

     

  }


  crearMapa(latitud, longitud) {
    var parent = this;
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 19,
      center: {lat: latitud, lng: longitud}
    });

    this.mapaCreado = true;

  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        var parent = this;
        this.marker = new google.maps.Marker({
          title: 'Mi posición',
          animation: 'DROP',
          map: this.map,
          position: {
            lat: parent.ubicacionActual.latitud,
            lng: parent.ubicacionActual.longitud
          }
        });

        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }






}