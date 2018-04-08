import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, NavOptions } from 'ionic-angular';
import { CrearMotoPage } from "../../opciones/motos/crear-moto/crear-moto";

@IonicPage()
@Component({
  selector: 'page-motos',
  templateUrl: 'motos.html',
})
export class MotosPage {

  pageCrearMoto: any = CrearMotoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController) {


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
