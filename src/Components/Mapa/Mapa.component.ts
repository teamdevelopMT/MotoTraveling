import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { IonicPage, NavController, ToastController, DateTime, NavParams } from 'ionic-angular';
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

 /*Estilo Mapa*/
 import { estilosMapa } from "../../Clases/Mapa/estilosMapa";


declare var google;


@Component({
  selector: 'mapa-component',
  templateUrl: 'Mapa.component.html'
})
export class MapaComponent implements OnInit{
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;
  markers: any[] = new Array<any>();
  stilosMapa : estilosMapa = new estilosMapa();
  suscripcionResultadoConsultaFire : any;
  @Input() flagValidarMapa: boolean;

  /*controlar cards de opciones en el mapa*/
  mostrarCrearRuta : boolean = true;
  mostrarInvitarUsuarios : boolean = false;
  mostrarPersonalizarMapa : boolean = false;

  metodoMapa = "ruta";

  origen="";
  destino = "";
  nombreRuta = "";

  estiloMapaSeleccion = "defecto";

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  ruta : rutas = new rutas();
  rutaUsuario : rutaUsuarios = new rutaUsuarios();
  rutaUsuarios : rutaUsuarios[];
  ubicacionActual : ubicacionUsuarios = new ubicacionUsuarios();
  ubicacionActualGuardar : ubicacionUsuarios = new ubicacionUsuarios();
  nombreUsuarioSession:string;
  mapaCreado: boolean = false;
  marcadoresCreados : boolean = false;
  objRutasCasteoFire : AngularFireObject<rutas>;
  nombreRutaAceptada : string = "Ninguna";
  
  constructor(public navParams: NavParams, public navCtrl: NavController, public toastCtrl: ToastController, private geolocation: Geolocation, private afDB: AngularFireDatabase, private storage: Storage) {
    
  }

  ngOnInit(){
   this.validarMapa();
 }

 ngOnChanges() {
   console.log("change mapa ",this.flagValidarMapa);
  if(this.flagValidarMapa){
    this.validarMapa();
    this.flagValidarMapa = false;
  }
}

  validarMapa(){
    this.storage.get('nombreRutaAceptada').then((val) => {
      
      if(val != "Ninguna" && val != undefined){
        this.nombreRutaAceptada = val;
        this.storage.set("nombreRutaAceptada","Ninguna");
        this.nombreRuta = val;

        const resultadoRutaFire = this.afDB.object('rutas/'+this.nombreRuta).valueChanges();

        let suscripcionResultadoRutaFire = resultadoRutaFire.subscribe(resp =>{
          let rutaobj = (resp as rutas);

          this.origen = rutaobj.origen;
          this.destino = rutaobj.destino;
          suscripcionResultadoRutaFire.unsubscribe();
          this.crearRuta();
         
      });

        
      }
  
      const watch = this.geolocation.watchPosition();
  
      this.storage.get('nombreUsuario').then((val) => {
        this.nombreUsuarioSession = val;
        var parent = this;
      });
      
      watch.subscribe((data) => {
        var parent = this;
  
        this.storage.get('nombreUsuario').then((val) => {
          if(this.metodoMapa == "ruta" && this.mapaCreado)
          {
              //Si se abrio el mapa por ruta se obtiene y actualiza la ubicacion del usuario en la ruta
              parent.rutaUsuario.latitud = data.coords.latitude.toString();
              parent.rutaUsuario.longitud = data.coords.longitude.toString();;
              parent.rutaUsuario.nombre = val;
  
              this.afDB.object('rutas/'+this.nombreRuta+'/rutaUsuarios/'+val).update(parent.rutaUsuario);
  
          }
        });
      });
    });
  }

  crearMapa(latitud, longitud) {
    var parent = this;
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 19,
      center: {lat: latitud, lng: longitud},
      fullscreenControl:false,
      zoomControl: true,
      valueOfstreetViewControl: true,
      
    });

    // Add a style-selector control to the map.

    // Set the map's style to the initial value of the selector.
    var styleSelector = document.getElementById('style-selector');
    this.map.setOptions({styles: this.stilosMapa.styles[this.estiloMapaSeleccion]});

    // Apply new JSON when the user selects a different style.
    styleSelector.addEventListener('change', function() {
      parent.map.setOptions({styles: parent.stilosMapa.styles[parent.estiloMapaSeleccion]});
    });

    this.directionsDisplay.setMap(this.map);

    this.mapaCreado = true;


  }

  crearRuta() {

    if(this.nombreRuta == "")
    {
      this.mostrarToast('No se ingreso un nombre a la ruta');
      this.mostrarCrearRuta=true;
      return false;
    }
    var variableFecha = new Date();
    
    this.ruta = new rutas();
    this.ruta.destino = this.destino;
    this.ruta.origen = this.origen;
    this.ruta.fecha = variableFecha.getDate().toString();

    this.afDB.list('rutas').set(this.nombreRuta,this.ruta).then(res => {
     
    this.cerrarModal();

    this.geolocation.getCurrentPosition().then((data) => {
        
      if(this.metodoMapa == "ruta")
      {
          //Si se abrio el mapa por ruta se obtiene y actualiza la ubicacion del usuario en la ruta

          this.rutaUsuario.latitud = data.coords.latitude.toString();
          this.rutaUsuario.longitud = data.coords.longitude.toString();
          this.rutaUsuario.nombre = this.nombreUsuarioSession;

          this.afDB.object('rutas/'+this.nombreRuta+'/rutaUsuarios/'+this.nombreUsuarioSession).update(this.rutaUsuario);


          let promesa = new Promise((resolve, reject) => {
            
                var parent = this;
              
                if(!this.mapaCreado)
                {
                    this.crearMapa(data.coords.latitude, data.coords.longitude);
                }
              
    
                
              const resultadoRutasUsuarios = this.afDB.list('rutas/'+this.nombreRuta+'/rutaUsuarios').valueChanges();
              this.suscripcionResultadoConsultaFire = resultadoRutasUsuarios.subscribe(rutasUs =>{
                this.rutaUsuarios = (rutasUs as rutaUsuarios[]);
                {
                  if(this.rutaUsuarios != null && this.rutaUsuarios.length != 0)
                    {
                      this.rutaUsuarios.forEach(element => {
                       
                      if(!this.marcadoresCreados)
                      {


                        var image = new google.maps.MarkerImage(
                          'assets/img/moto_250.png',
                          new google.maps.Size(85, 85),
                          new google.maps.Point(0, 0),
                          new google.maps.Point(17, 34),
                          new google.maps.Size(60, 60));
                          

                            this.marker = new google.maps.Marker({
                            title: element.nombre,
                            Snippet: element.nombre,
                            map: this.map,
                            icon : image,
                            label: element.nombre,
                            animation: 'BOUNCE',
                            position: 
                            {
                              lat: parseFloat(element.latitud),
                              lng: parseFloat(element.longitud)
                            }
                            });

                            if(this.marker.title != null && this.marker.title != undefined)
                            this.markers.push(this.marker);
                      }
                      else
                      {
                          
                          var latlng = new google.maps.LatLng(parseFloat(element.latitud), parseFloat(element.longitud));
                      
                          var marcadoActualizado = false;
                          this.markers.forEach(marcador => {

                              if(marcador.title == element.nombre)
                                {
                                  marcador.setPosition(latlng);
                                  marcadoActualizado = true;
                                }
                          });

                        if(!marcadoActualizado)
                        {

                          var image = new google.maps.MarkerImage(
                            'assets/img/moto_250.png',
                            new google.maps.Size(85, 85),
                          new google.maps.Point(0, 0),
                          new google.maps.Point(17, 34),
                          new google.maps.Size(60, 60));
                            
                          this.marker = new google.maps.Marker({
                            title: element.nombre,
                            Snippet: element.nombre,
                            map: this.map,
                            icon : image,
                            label: element.nombre,
                            animation: 'BOUNCE',
                            position: 
                            {
                              lat: parseFloat(element.latitud),
                              lng: parseFloat(element.longitud)
                            }
                            });

                            if(this.marker.title != null && this.marker.title != undefined)
                            this.markers.push(this.marker);

                        }
                      }
                    });
                        this.marcadoresCreados= true;
                    
                  }
              }

              
          });
        
        });
      
      }
     
 }).catch((error) => {
    console.log('Error getting location', error);
 });
});



    this.directionsService.route({
      origin: this.origen,
      destination: this.destino,
      travelMode: 'DRIVING',
    }, (response, status) => {
      if (status === 'OK') {

        this.directionsDisplay.setDirections(response);
      } else {
        this.mostrarToast('No hemos encontrado esa ubicación');
      }
    });
  }

  ngOnDestroy() {
    console.log("rrr destroy");
    this.suscripcionResultadoConsultaFire.unsubscribe();
}

  mostrarCardCrearRuta(){

    if(!this.mapaCreado)
    {
      this.mostrarToast("Por favor cree una ruta para continuar");
      this.cambiarColorFondoCardActivo("cardCrearRuta");
      this.mostrarCrearRuta=true;
      return false;
    }
   this.mostrarInvitarUsuarios = false;
   this.mostrarPersonalizarMapa = false;

   if(this.mostrarCrearRuta){
    this.aplicarEstilosUbicacionActual(false);
    this.cambiarColorFondoCardActivo("none");
    this.mostrarCrearRuta = false;
  }
  else
  {
    this.aplicarEstilosUbicacionActual(true);
    this.cambiarColorFondoCardActivo("cardCrearRuta");
    this.mostrarCrearRuta = true;
  }
  }

  mostrarCardInvitarUsuarios(){

    if(!this.mapaCreado)
    {
      this.mostrarToast("Se debe crear una ruta primero");
      this.cambiarColorFondoCardActivo("cardCrearRuta");
      this.mostrarCrearRuta=true;
      return false;
    }
    this.mostrarPersonalizarMapa = false;
    this.mostrarCrearRuta = false;

    if(this.mostrarInvitarUsuarios){
      this.aplicarEstilosUbicacionActual(false);
      this.cambiarColorFondoCardActivo("none");
      this.mostrarInvitarUsuarios = false;
    }
    else
    {
      this.aplicarEstilosUbicacionActual(true);
      this.cambiarColorFondoCardActivo("cardinvitarUsuarios");
      this.mostrarInvitarUsuarios = true;
    }
   }

   mostrarCardPersonalizarMapa(){
    if(!this.mapaCreado)
    {
      this.mostrarToast("Se debe crear una ruta primero");
      this.cambiarColorFondoCardActivo("cardCrearRuta");
      this.mostrarCrearRuta=true;
      return false;
    }

    this.mostrarInvitarUsuarios = false;
    this.mostrarCrearRuta = false

    if(this.mostrarPersonalizarMapa){
      this.aplicarEstilosUbicacionActual(false);
      this.cambiarColorFondoCardActivo("none");
      this.mostrarPersonalizarMapa = false;
    }
    else
    {
      this.aplicarEstilosUbicacionActual(true);
      this.cambiarColorFondoCardActivo("cardpersonalizarMapa");
      this.mostrarPersonalizarMapa = true;
    }
   }

   cerrarModal(){
    this.aplicarEstilosUbicacionActual(false);
    this.cambiarColorFondoCardActivo("none");
    this.mostrarInvitarUsuarios = false;
    this.mostrarCrearRuta = false
    this.mostrarPersonalizarMapa = false;
   }

   mostrarToast(mensaje){
     this.cerrarModal();
     let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present();
   }

   cambiarColorFondoCardActivo(cardActivo){
    document.getElementById("cardCrearRuta").style.removeProperty("background-color");
    document.getElementById("cardinvitarUsuarios").style.removeProperty("background-color");
    document.getElementById("cardpersonalizarMapa").style.removeProperty("background-color");

    if(cardActivo != "none")
    {
      console.log(cardActivo);
      document.getElementById(cardActivo).style.backgroundColor = "rgb(255, 152, 0)";
    }
   }


   validarRespuestaInvitacionUsuario(respuestaInvitacionUsuario)
   {
        if(respuestaInvitacionUsuario)
        {
            this.mostrarToast('Se ha enviado la invitacion correctamente');
        }
        else
        {
            this.mostrarToast('El usuario ya aceptado la invitación');
        }
   }

   centrarUbicacion()
   {
    var latlng = new google.maps.LatLng(parseFloat(this.rutaUsuario.latitud), parseFloat(this.rutaUsuario.longitud));
    this.map.setOptions({
        center : latlng,
        zoom : 19
    });
   }


   aplicarEstilosUbicacionActual(modalAbierta)
   {
    var divubicacionActual = document.getElementById("ubicacionActual"); 
     if(modalAbierta)
     {
      divubicacionActual.style.position = "relative";
      divubicacionActual.style.top = "120px";
      divubicacionActual.style.left = "1%";
     }
     else
     {
      divubicacionActual.style.position = "fixed";
      divubicacionActual.style.top = "180px";
      divubicacionActual.style.left = "5%";
     }
    
   }

 

}