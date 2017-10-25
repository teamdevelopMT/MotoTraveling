import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookProvider } from "../../providers/facebook/facebook";

import { InicioPage } from "../modulos/inicio/inicio";
import { RutasPage } from "../modulos/rutas/rutas";
import { NotificacionesPage } from "../modulos/notificaciones/notificaciones";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  inicio: any;
  rutas: any;
  notificaciones: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicio = InicioPage;
    this.rutas = RutasPage;
    this.notificaciones = NotificacionesPage;
    
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}