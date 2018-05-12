import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, LoadingController, ToastController } from 'ionic-angular';
import { FotoGaleriaProvider } from "../../../../../../providers/foto-galeria/foto-galeria";
import { AngularFireDatabase } from 'angularfire2/database'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IMoto } from "../../../../../../Interfaces/IMoto";
import { Storage } from '@ionic/storage';
import { SubirFotosProvider } from "../../../../../../providers/subir-fotos/subir-fotos";
import { MotosPage } from "../motos"

@IonicPage()
@Component({
  selector: 'page-crear-moto',
  templateUrl: 'crear-moto.html',
})
export class CrearMotoPage {
  previewMoto: string = "./assets/img/img-moto-default.jpg";
  motoFoto: any;
  date: Date = new Date();
  yearMin: number;
  yearMaxS: number;
  yearMaxT: number;
  formulario: FormGroup;
  moto: IMoto;
  idUsuario: string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public actionSheetCtrl: ActionSheetController,
    public serviceFotoGaleriaProvider: FotoGaleriaProvider,
    public af: AngularFireDatabase,
    private fb: FormBuilder,
    private storage: Storage,
    private subirFotoService: SubirFotosProvider,
    public loadingCtrl: LoadingController,
    public toasCtrl: ToastController) {

    this.yearMin = this.GetYearMin();
    this.yearMaxS = this.GetYearMax('s');
    this.yearMaxT = this.GetYearMax('t');

    this.formulario = this.fb.group({
      nombreMoto: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      placas: ['', [Validators.required]],
      kilometraje: ['', []],
      soat: ['', []],
      TecnoMacanica: ['', []],
      mantenimiento: ['', []],
      cambioAceite: ['', []]
    });

    this.storage.get("_correo_").then(res => {
      this.idUsuario = res.replace(/\@/g, '');
      this.idUsuario = this.idUsuario.replace(/\./g, '');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearMotoPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Agrega una foto de tu moto',
      buttons: [
        {
          text: 'Foto',
          icon: 'ios-camera',
          handler: () => {
            this.serviceFotoGaleriaProvider.Camara().then(res => {
              this.previewMoto = this.serviceFotoGaleriaProvider.info.imgPrevie;
              this.motoFoto = this.serviceFotoGaleriaProvider.info.foto;
            });
          }
        }, {
          text: 'Galeria',
          icon: 'ios-images',
          handler: () => {
            this.serviceFotoGaleriaProvider.Galeria().then(res => {
              this.previewMoto = this.serviceFotoGaleriaProvider.info.imgPrevie;
              this.motoFoto = this.serviceFotoGaleriaProvider.info.foto;
            });
          }
        }
      ]
    });
    actionSheet.present();
  }

  GetYearMin() {
    return this.date.getFullYear();
  }

  GetYearMax(tipo) {
    switch (tipo) {
      case 's':
        return this.date.getFullYear() + 1;
      case 't':
        return this.date.getFullYear() + 5;
    }
  }

  CrearMoto() {
    let loading = this.loadingCtrl.create({
      content: 'Estamos guardando tu moto'
    });

    loading.present();

    this.moto = {
      nombreMoto: this.formulario.get('nombreMoto').value,
      marca: this.formulario.get('marca').value,
      modelo: this.formulario.get('modelo').value,
      placas: this.formulario.get('placas').value,
      kilometraje: this.formulario.get('kilometraje').value,
      FechaSoat: this.formulario.get('soat').value,
      fechaTecnomecanica: this.formulario.get('TecnoMacanica').value,
      fechaUltimoMantimiento: this.formulario.get('mantenimiento').value,
      cambioAceite: this.formulario.get('cambioAceite').value
    }

    if (this.motoFoto != undefined && this.motoFoto != null) {
      this.subirFotoService.SubirFotosFirebase('Motos', this.motoFoto).then(res => {
        this.moto.fotoMoto = res.toString();
        this.af.database.ref().child('/usuarios/' + this.idUsuario + '/motos').push(this.moto).then(res => {
          loading.dismiss();
          this.CrearToast();
          this.navCtrl.pop();
        });
      });
    } else {
      this.af.database.ref('/usuarios/' + this.idUsuario + '/motos').push(this.moto).then(res => {
        loading.dismiss();
        this.CrearToast();
        this.navCtrl.pop();
      });
    }
  }

  CrearToast() {
    let toast = this.toasCtrl.create({
      message: 'Tu moto ha sido creada correctamente',
      duration: 3000,
      showCloseButton: true,
      position:'top',
      closeButtonText: 'OK',
      cssClass:"guardado"
    });
    toast.present();
  }
}
