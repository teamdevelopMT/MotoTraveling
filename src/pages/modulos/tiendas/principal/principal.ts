import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams, Platform, ModalController} from 'ionic-angular';
import { NormalPage } from "../../inicio/post/normal/normal";
import { EmergenciaPage } from "../../inicio/post/emergencia/emergencia";
import { TiendaPage } from "../../inicio/post/tienda/tienda";
import { Observable } from 'rxjs/Observable';
import { Normal } from "../../../../Clases/Modulos/Posts/Normal.cs";
import { Tienda } from "../../../../Clases/Modulos/Posts/Tienda.cs";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Usuarios } from '../../../../Clases/Modulos/Usuarios/usuarios.cs';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
  animations: [
    trigger('itemState', [
      state('in', style({ transform: 'translateX(0)' })),
      //Enter
      transition('void => *', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('300ms linear')
      ]),
      //Leave
      transition('* => void', animate('300ms ease-out', style({
        transform: 'translateX(100%)'
      }))),
    ])
  ]
})
export class PrincipalPage {

  ventas: Observable<any[]>
  data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,private platfrom: Platform,
    private modalCtrl: ModalController,
    private normal: Normal,
    private tienda: Tienda,
    private storage: Storage,
    private usuarios: Usuarios) {

    this.ventas = this.tienda.ConsultarPost();

    this.storage.get('nombreUsuario').then(res => {
      this.usuarios.ConsultarUsuario(res).then(usu => {
        if (usu["foto"] == '')
          usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";

        this.data = usu;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  PostTienda() {
    let modal = this.modalCtrl.create(TiendaPage)
    modal.present();
  }


}
