import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, NavOptions } from 'ionic-angular';
import { CrearMotoPage } from "../../opciones/motos/crear-moto/crear-moto";
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-motos',
  templateUrl: 'motos.html',
})
export class MotosPage {

  pageCrearMoto: any = CrearMotoPage;
  motos:Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,
    private toastCtrl: ToastController, public af: AngularFireDatabase) {

      this.storage.get('nombreUsuario').then(res => {
        let result: any = this.af.list('usuarios/'+res+'/motos').valueChanges();

        result.subscribe(resp =>{
          this.motos = resp;
        });
      });


      

  }

  ionViewDidLoad() {
    if (this.navParams.get('crearMoto') != undefined && this.navParams.get('crearMoto') != null) {
      this.CargarToast();
    }
  }

  CargarToast() {
    let toast = this.toastCtrl.create({
      message: 'Se creo tu moto de manera correcta',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }



}
