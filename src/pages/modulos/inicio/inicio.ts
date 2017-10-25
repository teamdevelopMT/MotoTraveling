
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//Sevicios
import { CerrarSesionProvider } from "../../../providers/cerrar-sesion/cerrar-sesion";

//paginas
import {LoginPage  } from "../../Inicio de sesion/login/login";

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private CerrarSesionService: CerrarSesionProvider,
    private storage: Storage) {
  }

  CerrarSesion() {
    this.CerrarSesionService.signOut().then(res => {
      this.navCtrl.setRoot(LoginPage);
    
    });

  }

}
