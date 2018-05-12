import { Component } from '@angular/core';
import { IonicPage, ViewController, Platform, ToastController, NavParams } from 'ionic-angular';
import { OneSignal, OSNotification } from '@ionic-native/onesignal';
import { Http, Headers, RequestOptions } from "@angular/http";
import * as firebase from 'firebase'
import { AngularFireDatabase } from 'angularfire2/database'
import { IRobo } from "../../../../../Interfaces/IRobo";
import { Geolocation } from '@ionic-native/geolocation';
import { Observable, Subscribe } from '@firebase/util';
import { IMoto } from '../../.././../../Interfaces/IMoto'

@IonicPage()
@Component({
  selector: 'page-robo',
  templateUrl: 'robo.html',
})
export class RoboPage {
  listMotos: any;
  constructor(public viewCtrl: ViewController,
    private oneSignal: OneSignal,
    private platform: Platform,
    private http: Http,
    private af: AngularFireDatabase,
    private geolocation: Geolocation,
    private toastCtrl: ToastController,
    private navparamas: NavParams) {
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

    const options = new RequestOptions({ headers: headers });
    this.http.post('https://onesignal.com/api/v1/notifications', body, options).subscribe(data => {
      this.GuardarRobo().then(resp => {
        let toast = this.toastCtrl.create({
          message: 'El robo ya ha sido notificado a tus amigos',
          duration: 3000,
          position: 'top',
          cssClass: "robo",
          closeButtonText: 'OK',
        });


        this.viewCtrl.dismiss()
        toast.present();
      });
    }, error => {
      console.log(error);
    });

  }

  GuardarRobo() {
    let promise = new Promise((resolve, reject) => {

      this.geolocation.getCurrentPosition().then((resp) => {
        let today: any = new Date();
        let dd: any = today.getDate();
        let mm: any = today.getMonth() + 1; //January is 0!

        let yyyy = today.getFullYear();
        if (dd < 10) {
          dd = '0' + dd;
        }
        if (mm < 10) {
          mm = '0' + mm;
        }
        today = dd + '/' + mm + '/' + yyyy;

        let hora: any = new Date();
        hora = hora.getHours() + ":" + hora.getMinutes();

        let detales: IRobo = {
          latitud: resp.coords.latitude.toString(),
          longitud: resp.coords.longitude.toString(),
          idUsuario: this.navparamas.get('idUsuario'),
          hora: hora,
          fecha: today,
          estado: true,
          idMoto: ''
        }

        this.listMotos = this.af.list('/usuarios/' + this.navparamas.get('idUsuario') + '/motos').valueChanges();

        this.listMotos.subscribe(res => {
          let defaultMoto = res.filter(ref => ref.default );
          
          detales.idMoto = defaultMoto[0].nombreMoto;

          this.af.database.ref('/robos').push(detales).then(res => {
            resolve();
          })
          this.listMotos.unsubscribe();
        })
      })
    });
    return promise;

  }


}
