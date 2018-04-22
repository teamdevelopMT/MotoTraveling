
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { NormalPage } from "../inicio/post/normal/normal";
import { EmergenciaPage } from "../inicio/post/emergencia/emergencia";
import { TiendaPage } from "../inicio/post/tienda/tienda";
import { RoboPage } from "../inicio/post/robo/robo";
import { Observable } from 'rxjs/Observable';
import { Normal } from "../../../Clases/Modulos/Posts/Normal.cs";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Usuarios } from '../../../Clases/Modulos/Usuarios/usuarios.cs';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
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
export class InicioPage {

  posts: Observable<any[]>
  ventas: Observable<any[]>
  data: any = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private platfrom: Platform,
    private modalCtrl: ModalController,
    private normal: Normal,
    private storage: Storage,
    private usuarios: Usuarios) {

    this.posts = this.normal.ConsultarPost();

    this.storage.get('nombreUsuario').then(res => {
      this.usuarios.ConsultarUsuario(res).then(usu => {
        if (usu["foto"] == '')
          usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";

        this.data = usu;
      });
    });
  }

  PostNormal() {
    let modal = this.modalCtrl.create(NormalPage);
    modal.present();
  }

  PostEmergencia() {
    let modal = this.modalCtrl.create(EmergenciaPage, this.data)
    modal.present();
  }

  PostTienda() {
    let modal = this.modalCtrl.create(TiendaPage)
    modal.present();
  }

  PostRobo(){
    let modal = this.modalCtrl.create(RoboPage)
    modal.present();
  }

}
