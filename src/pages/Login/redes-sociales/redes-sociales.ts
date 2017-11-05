import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Login } from "../../../Clases/Login/Login.cs";
import { RegistroPage } from "../registro/registro";
import { TabsPage } from '../../tabs/tabs'

@IonicPage()
@Component({
  selector: 'page-redes-sociales',
  templateUrl: 'redes-sociales.html',
})
export class RedesSocialesPage {

  registroPage: any = RegistroPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private login: Login,
    private loadingCtrl: LoadingController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RedesSocialesPage');
  }


  IniciarSesionFacebook() {
    let cargando = this.loadingCtrl.create({
      content: "Iniciando sesión con facebook"
    });

    cargando.present();

    this.login.IniciarSesionFacebook().then(res => {
      cargando.dismiss();

    }).catch(err => {
      cargando.dismiss();
      console.error("erorrrrr" + err);
    })
  }

  IniciarSesionGoogle() {
    let cargando = this.loadingCtrl.create({
      content: "Iniciando sesión con google"
    });

    cargando.present();
    this.login.IniciarSesionGoogle().then(res => {
      cargando.dismiss();
      this.navCtrl.setRoot(TabsPage);
    }).catch(err => {
      cargando.dismiss();
      console.error("erorrrrr" + err);
    })
  }

}
