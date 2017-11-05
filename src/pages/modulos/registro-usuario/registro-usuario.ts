import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Slides } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

import { IUsuario } from '../../../Interfaces/IUsuario'
import { Usuarios } from "../../../Clases/Modulos/Usuarios/usuarios.cs";
import { TabsPage } from "../../tabs/tabs";



@Component({
  selector: 'page-registro-usuario',
  templateUrl: 'registro-usuario.html',
})


export class RegistroUsuarioPage implements AfterViewInit {

  @ViewChild(Slides) slides: Slides;

  formulario: FormGroup;
  titulo: string = "Registro de perfil";
  imgPreview: string = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Ffoto-perfil-default.jpg?alt=media&token=9f9a8c03-d662-424a-9d26-70bf6b03a66f";
  foto: string;
  nombre: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private storage: Storage,
    private usuarios: Usuarios) {

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^([a-zA-Zñáéíóú]+[\s]*){4,25}$/)]]
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroUsuarioPage');
  }

  ngAfterViewInit() {
    this.slides.paginationType = "progress";
    this.slides.direction = "horizontal";
    this.slides.lockSwipes(true);
  }

  OnFocus() {
    document.getElementsByClassName('scroll-content')[0].className += " padding";
  }

  RegistrarUsuario() {
    this.storage.get("_correo_").then(res => {
      let idUsuario = res.replace(/\@/g, '');
      idUsuario = idUsuario.replace(/\./g, '')
      let usuario: IUsuario = {
        idUsuario: idUsuario,
        correo: res,
        nombre: this.nombre,
        foto: this.foto == undefined ? '' : this.foto,
        estadoConexion: true
      }
      this.usuarios.CrearUsuarios(usuario).then(res => {
        this.navCtrl.setRoot(TabsPage);
      });
    });
  }

  Continuar() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  SeleccionarFoto() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Seleccionar',
      buttons: [
        {
          text: 'Camara',
          icon: 'ios-camera',
          handler: () => {
            this.Camara();
            console.log('Archive clicked');
          }
        }, {
          text: 'Galeria',
          icon: 'ios-image',
          cssClass: 'galeria',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }

  Camara() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imgPreview = 'data:image/jpeg;base64,' + imageData;
      this.foto = imageData;

    }, (err) => {
      // this.mostrar_mensaje("no se puede mostrar la camara en el navegador");
      console.log("error");
    });

  }
}




