import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase'

@Injectable()
export class SubirFotosProvider {

  constructor(public af: AngularFireDatabase) {

  }

  SubirFotosFirebase(carpeta: string, img: string) {
    let promesa = new Promise((resolve, reject) => {
      if (img == '')
        resolve('');
      if ((img.indexOf('http://') != -1) || (img.indexOf('https://') != -1))
        resolve(img);
      let storaRef = firebase.storage().ref();
      let nombreArchivo = new Date().valueOf();

      let uploadTask: firebase.storage.UploadTask = storaRef.child(carpeta + '/' + nombreArchivo).putString(img, 'base64', { contentType: 'image/jpeg' })
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => { },
        (error) => {
          reject(error);
        },
        () => {
          let url = uploadTask.snapshot.downloadURL;
          resolve(url);
        })
    });

    return promesa;

  }
}



