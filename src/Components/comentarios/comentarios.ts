
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'component-comentarios',
  templateUrl: 'comentarios.html'
})
export class comentariosComponent {

postComentar:any;
listaComentarios : Array<any> = new Array<any>();
nuevoComentario:String = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private platfrom: Platform,
    private modalCtrl: ModalController,
    public af: AngularFireDatabase,
    private storage: Storage) {
      this.postComentar = navParams.get('post');
      console.log( this.postComentar);
  }

  guardarComentario(){
   this.listaComentarios.push(this.nuevoComentario);
  }

}
