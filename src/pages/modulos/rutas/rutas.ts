import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html',
})
export class RutasPage {
  validarMapa : boolean = false;
  flagLeavePage : boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidEnter(){
    if(this.flagLeavePage)
    {
      this.validarMapa=true;
    }
    
  }
  ionViewDidLeave(){
    this.flagLeavePage=true;
    this.validarMapa=false;
  }

}
