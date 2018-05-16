import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase'
import { AngularFireDatabase } from 'angularfire2/database'
import { IRobo } from "../../../Interfaces/IRobo";
import { Observable } from 'rxjs/Observable';
import { IUsuario } from '../../../Interfaces/IUsuario';
import { Usuarios } from '../../../Clases/Modulos/Usuarios/usuarios.cs';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';


@IonicPage()
@Component({
  selector: 'page-robo-list',
  templateUrl: 'robo-list.html',
})
export class RoboListPage {
  title: string = 'Robos Actuales';
  listRobos: any[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private af: AngularFireDatabase,
    private viewCtrl: ViewController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {



    this.ConsultarUsuarios();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoboListPage');

  }

  Cerrar() {
    this.viewCtrl.dismiss();
  }
  ConsultarRobos() {
    let promise = new Promise((resolve, reject) => {
      let robos = this.af.list('/robos').valueChanges();
      robos.subscribe(resp => {
        resolve({ "result": resp });
      });
    });
    return promise;
  }
  ConsultarUsuarios() {
    this.ConsultarRobos().then(resp => {
      let result: any = resp;
      for (const item of result.result) {

        let usuarios: any = this.af.object('/usuarios/' + item.idUsuario).valueChanges();
        usuarios.subscribe(usu => {
          let data: any = {}
          data.hora = item.hora;
          data.fecha = item.fecha;
          data.latitud = item.latitud;
          data.longitud = item.longitud;
          data.nombre = usu.nombre;
          data.fotoPerfil = usu.foto;
          let motos = usu.motos != undefined && Object.keys(usu.motos).map(function (k) { return usu.motos[k] }).filter(fil => fil.nombreMoto == item.idMoto);

          if (motos != undefined || motos != null) {
            data.marca = motos[0].marca;
            data.modelo = motos[0].modelo;
            data.placa = motos[0].placas;
          }

          this.listRobos.push(data);
        });
      }
    })
  }

  CargarMapa(latitud, longitud) {

    let staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap";

    //Set the Google Map Center.
    staticMapUrl += "?center=" + (latitud) + "," + (longitud);

    //Set the Google Map Size.
    staticMapUrl += "&size=640x400";

    //Set the Google Map Zoom.
    staticMapUrl += "&zoom=" + 18;

    //Set the Google Map Type.
    staticMapUrl += "&maptype=" + "roadmap";

    staticMapUrl += "&markers=icon:red|" + latitud + "," + longitud + "|";

    return staticMapUrl;
  }



}


