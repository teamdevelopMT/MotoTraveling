
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { NormalPage } from "../inicio/post/normal/normal";
import { Observable } from 'rxjs/Observable';
import { Normal } from "../../../Clases/Modulos/Posts/Normal.cs";
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  posts: Observable<any[]>

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private platfrom: Platform,
    private modalCtrl: ModalController,
    private normal: Normal) {
    this.posts = this.normal.ConsultarPost();
    console.log(this.posts);
  }
  PostNormal() {
    let modal = this.modalCtrl.create(NormalPage);
    modal.present();
  }

  ConsultarPost() {


  }

}
