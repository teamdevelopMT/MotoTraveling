import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IUsuario } from "../../../../../Interfaces/IUsuario"

@IonicPage()
@Component({
  selector: 'page-mi-informacion',
  templateUrl: 'mi-informacion.html',
})
export class MiInformacionPage {

  usuario:IUsuario;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = this.navParams.data;
  }

  ionViewDidLoad() {
  }

}
