import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Sevicios
import { CerrarSesionProvider } from "../../../providers/cerrar-sesion/cerrar-sesion";

//paginas
import {LoginPage  } from "../../Inicio de sesion/login/login";


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private CerrarSesionService:CerrarSesionProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  CerrarSesion() {
    this.CerrarSesionService.signOut().then(res => {
      this.navCtrl.setRoot(LoginPage);
    });

  }
}
