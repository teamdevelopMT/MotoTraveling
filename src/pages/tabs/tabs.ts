import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookProvider } from "../../providers/facebook/facebook";

// paginas

import { InicioPage } from "../modulos/inicio/inicio";
import { RutasPage } from "../modulos/rutas/rutas";
import { MensajesPage } from "../modulos/mensajes/mensajes";
import { PrincipalPage } from "../modulos/tiendas/principal/principal";
import { NotificacionesPage } from "../modulos/notificaciones/notificaciones";

import { PerfilPage } from "../modulos/perfil/perfil";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  inicio: any;
  rutas: any;
  mensajes: any;
  tiendas: any;
  notificaciones: any;
  perfil: any = PerfilPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicio = InicioPage;
    this.rutas = RutasPage;
    this.tiendas = PrincipalPage;
    this.mensajes = MensajesPage;
    this.notificaciones = NotificacionesPage;


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  llamarPerfil() {
    this.navCtrl.push(PerfilPage);

  }

}
