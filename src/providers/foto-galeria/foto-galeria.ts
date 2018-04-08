import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { IGaleria } from '../../Interfaces/IGaleria';

@Injectable()
export class FotoGaleriaProvider {
  info: IGaleria = { foto: '', imgPrevie: '' };
  constructor(public http: Http,
    private camera: Camera,
    private imagePicker: ImagePicker ) {
    console.log('Hello FotoGaleriaProvider Provider');
  }

  Camara() {
    let promise = new Promise((resolve, reject) => {
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
        this.info = {
          imgPrevie: 'data:image/jpeg;base64,' + imageData,
          foto: imageData
        }
        resolve();
      }, (err) => {
        // this.mostrar_mensaje("no se puede mostrar la camara en el navegador");
        console.log("error");
        reject();
      });
    });

    return promise;
  }

  Galeria() {
    let promise = new Promise((resolve, reject) => {
      let option: ImagePickerOptions = {
        maximumImagesCount: 1,
        quality: 80,
        outputType: 1
      }

      this.imagePicker.getPictures(option).then((results) => {
        for (let img of results) {
          this.info = {
            imgPrevie: 'data:image/jpeg;base64,' + img,
            foto: img
          }
          break;
        }
        resolve();
      }, (err) => {
        reject();
      });

    });
    return promise;
  }
}


