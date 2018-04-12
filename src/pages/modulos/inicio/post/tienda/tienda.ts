import { Component } from '@angular/core';
import { IonicPage, ViewController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Storage } from '@ionic/storage';


import { SubirFotosProvider } from "../../../../../providers/subir-fotos/subir-fotos";
import { Tienda } from "../../../../../Clases/Modulos/Posts/Tienda.cs";
@IonicPage()
@Component({
  selector: 'page-tienda',
  templateUrl: 'tienda.html',
})
export class TiendaPage {
  imgPreview: string = '';
  foto: any = '';
  decripcion: string ='';
  valor: number = null;
  numeroContacto: number = null;
  idusuario: string;

  constructor(private viewCtrl: ViewController,
    private camera: Camera,
    private imagePicker: ImagePicker,
    private storage: Storage,
    public toastCtrl: ToastController,
    private subirFotoService: SubirFotosProvider,
    private tienda: Tienda) {
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
      quality: 80,
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
      sourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM
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
      foto: "",
      valor: this.valor,
      numeroContacto: this.numeroContacto
    }

    this.subirFotoService.SubirFotosFirebase('Post/Tienda', this.foto).then(res => {
      archivo.foto = res.toString();
      this.tienda.SubirPost(archivo).then(res=>{
        this.mostrarToast("Clasificado realizado correctamente");
        this.cerrar();
      });

    });


  }


  mostrarToast(mensaje){
    let toast = this.toastCtrl.create({
     message: mensaje,
     duration: 3000,
     position: 'top'
   });
   toast.present();
  }

}
