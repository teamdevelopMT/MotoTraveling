import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

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
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
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
      console.log(err)

      if (err.code == 'auth/account-exists-with-different-credential') {
        let alert = this.alertCtrl.create({
          title: 'Algo paso!',
          subTitle: 'Ya has creado una cuenta con el correo que intentas registrar con Facebook!',
          buttons: ['Aceptar']
        });
        alert.present();
      }
      cargando.dismiss();
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
