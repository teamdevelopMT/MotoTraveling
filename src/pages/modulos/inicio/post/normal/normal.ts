import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Storage } from '@ionic/storage';


import { SubirFotosProvider } from "../../../../../providers/subir-fotos/subir-fotos";
import { Normal } from "../../../../../Clases/Modulos/Posts/Normal.cs";
@IonicPage()
@Component({
  selector: 'page-normal',
  templateUrl: 'normal.html',
})
export class NormalPage {
  imgPreview: any;
  foto: any = '';
  decripcion: string ='';
  idusuario: string
 

  constructor(private viewCtrl: ViewController,
    private camera: Camera,
    private imagePicker: ImagePicker,
    private storage: Storage,
    private subirFotoService: SubirFotosProvider,
    private normal: Normal) {
    this.storage.get('nombreUsuario').then(res => {
      this.idusuario = res;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NormalPage');
  }
  cerrar() {
    this.viewCtrl.dismiss();

  }

  keyup(e) {
    e.style.height = (10 + e.scrollHeight) + "px";
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
    let option: ImagePickerOptions = {
      maximumImagesCount: 1,
      quality: 50,
      outputType: 1
    }

    this.imagePicker.getPictures(option).then((results) => {
      for (let img of results) {
        this.imgPreview = 'data:image/jpeg;base64,' + img;
        this.foto = img;
        break;
      }

    }, (err) => {

    });
  }

  SubirPost() {
    let today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; //January is 0!

    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;

    let hora:any = new Date();
    hora = hora.getHours() + ":" + hora.getMinutes();

    let archivo = {
      descripcion: this.decripcion,
      fecha: today,
      hora: hora,
      idUsuario: this.idusuario,
      foto: ""
    }

    this.subirFotoService.SubirFotosFirebase('Post/Normal', this.foto).then(res => {
      archivo.foto = res.toString();
      this.normal.SubirPost(archivo).then(res=>{
        this.cerrar();
      });

    });


  }

}