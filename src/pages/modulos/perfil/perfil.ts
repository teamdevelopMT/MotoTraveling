import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Login } from "../../../Clases/Login/Login.cs";
import { RedesSocialesPage } from "../../Login/redes-sociales/redes-sociales";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private login: Login) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  CerrarSesion() {
    let cerrar = this.loadingCtrl.create({
      content: "Cerrando sesión"
    });
    cerrar.present();

    this.login.CerrarSesion().then(res => {
      cerrar.dismiss();
      this.navCtrl.setRoot(RedesSocialesPage);
    }).catch(err => {
      cerrar.dismiss();
      console.error(err);
    })



  }
}
