import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Login } from "../../../Clases/Login/Login.cs";
import { RedesSocialesPage } from "../../Login/redes-sociales/redes-sociales";
import { Usuarios } from '../../../Clases/Modulos/Usuarios/usuarios.cs';
import { Storage } from '@ionic/storage';
import { IUsuario } from "../../../Interfaces/IUsuario";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario: IUsuario = {};
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private login: Login,
    private usuarios: Usuarios,
    private storage: Storage) {

    this.storage.get('nombreUsuario').then(res => {
      this.usuarios.ConsultarUsuario(res).then(usu => {
        if (usu["foto"] == '')
          usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Ffoto-perfil-default.jpg?alt=media&token=9f9a8c03-d662-424a-9d26-70bf6b03a66f";

        this.usuario = usu;
      })
    });

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
