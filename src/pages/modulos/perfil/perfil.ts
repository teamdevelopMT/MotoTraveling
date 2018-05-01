import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Login } from "../../../Clases/Login/Login.cs";
import { RedesSocialesPage } from "../../Login/redes-sociales/redes-sociales";
import { Usuarios } from '../../../Clases/Modulos/Usuarios/usuarios.cs';
import { Storage } from '@ionic/storage';
import { IUsuario } from "../../../Interfaces/IUsuario";
import { MotosPage } from "../perfil/opciones/motos/motos";
import { MiInformacionPage } from "../perfil/opciones/mi-informacion/mi-informacion";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario: IUsuario = {};
  misMotos: any = MotosPage;
  emergencia: any = MiInformacionPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private login: Login,
    private usuarios: Usuarios,
    private storage: Storage) {

    this.storage.get('nombreUsuario').then(res => {
      this.usuarios.ConsultarUsuario(res).then(usu => {
        if (usu["foto"] == '')
          usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
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

  DatosEmergencia() {
    this.navCtrl.push(this.emergencia, this.usuario);
  }
}
