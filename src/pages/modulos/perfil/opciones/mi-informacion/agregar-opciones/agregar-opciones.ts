import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-agregar-opciones',
  templateUrl: 'agregar-opciones.html',
})
export class AgregarOpcionesPage {

  tipoDatoEmergencia: string
  color:string ="moto";
  tipo:string ="";
  msgBoton:string="";
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private viewCtrl: ViewController) {
    this.tipoDatoEmergencia = this.navParams.get('tipodatoEmergencia');
    if(this.tipoDatoEmergencia == 'medicamentos'){
      this.tipo = "Agregar Nuevo Medicamento";
      this.color ="google";
      this.msgBoton ="Guardar Medicamento";
    }else{
      this.tipo = "Agregar Nuevo Contacto";
      this.color ="moto";
      this.msgBoton ="Guardar Contacto";
    }


    console.log(this.tipoDatoEmergencia);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarOpcionesPage');
  }
  Cerrar() {
    this.viewCtrl.dismiss();

  }

}
