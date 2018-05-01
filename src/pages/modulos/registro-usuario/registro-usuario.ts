import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Slides, AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
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
  imgPreview: string = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
  foto: string;
  nombre: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private storage: Storage,
    private usuarios: Usuarios,
    private imagePicker: ImagePicker,
    private alertCtrl: AlertController) {

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



    this.storage.get("nombreUsuario").then(res => {
      this.storage.get("_correo_").then(correo => {
        let usuario: IUsuario = {
          idUsuario: res,
          correo: correo,
          nombre: this.nombre,
          foto: this.foto == undefined ? 'https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805' : this.foto,
          estadoConexion: true
        }
        this.usuarios.CrearUsuarios(usuario).then(res => {

          this.alertCtrl.create({
            title: "Bienvenido",
            subTitle: "Felicidades, ahora haces parte de la comunidad mas grande de moteros del mundo!",
            buttons: ["Aceptar"]
          }).present();

          this.navCtrl.setRoot(TabsPage);
        });

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
          icon: 'ios-images',
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

  Galeria() {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
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




