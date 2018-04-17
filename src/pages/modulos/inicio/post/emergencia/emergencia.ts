
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { storage } from 'firebase';
import { Usuarios } from '../../../../../Clases/Modulos/Usuarios/usuarios.cs';
import { IUsuario } from "../../../../../Interfaces/IUsuario";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { SMS } from '@ionic-native/sms';
import { IGeocoder } from "../../../../../Interfaces/IGeocoder";
import { stringify } from '@firebase/util';

@IonicPage()
@Component({
  selector: 'page-emergencia',
  templateUrl: 'emergencia.html',
})

export class EmergenciaPage {

  idUsuario: any;
  usuario: IUsuario = {};
  mapa: any;
  nombreCIudad:string;
  direccion:string;
  logitud: number;
  latitud: number;
  prueba:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage,
    private usuarios: Usuarios,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private sms: SMS
  ) {

    this.storage.get("_correo_").then(res => {
      this.idUsuario = res.replace(/\@/g, '');
      this.idUsuario = this.idUsuario.replace(/\./g, '');

      this.usuarios.ConsultarUsuario(this.idUsuario).then(usu => {
        if (usu["foto"] == '')
          usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
        this.usuario = usu;
      })
    });
    this.GetGeolocalitation();
  }

  ionViewDidLoad() {

  }

  GetGeolocalitation() {


    this.geolocation.getCurrentPosition().then((resp) => {

      let staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap";

      //Set the Google Map Center.
      staticMapUrl += "?center=" + (resp.coords.latitude) + "," + (resp.coords.longitude);

      //Set the Google Map Size.
      staticMapUrl += "&size=640x400";

      //Set the Google Map Zoom.
      staticMapUrl += "&zoom=" + 18;

      //Set the Google Map Type.
      staticMapUrl += "&maptype=" + "roadmap";

      staticMapUrl += "&markers=icon:red|" + resp.coords.latitude + "," + resp.coords.longitude + "|";

      this.mapa = staticMapUrl;

      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
        .then((result: NativeGeocoderReverseResult) =>{
         
          this.nombreCIudad = result[0]['countryName'] +' '+result[0]['locality'] +' ' +result[0]['subLocality'];
          this.direccion = result[0]['thoroughfare']+' # ' + result[0]['subThoroughfare'];                                 

        })
        .catch((error: any) => console.log(error));
      this.latitud = resp.coords.latitude;
      this.logitud = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
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

  PedirAyuda() {

    
    this.sms.send('3508777293', 'Hola acabo de tener accidente necesito de tu ayuda, te envio la ubicacion donde me encuentro: https://www.google.com/maps/dir/?api=1&destination=' + this.latitud + ',' + this.logitud);
  }
}
