import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//Sevicios
import { NetworkProvider } from "../../providers/network/network";
import { FacebookProvider } from "../../providers/facebook/facebook";

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  usuario: string;
  conexion: boolean = true;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private FacebookService: FacebookProvider,
    private storage: Storage,
    private network: NetworkProvider) {

    this.storage.get("userLogin").then((value) => {
      this.usuario = value;
    });
 
  }

  CerrarSesionFacebook() {
    this.FacebookService.signOut();
  }

}
