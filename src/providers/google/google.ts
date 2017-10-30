
import { Platform, AlertController, LoadingController } from "ionic-angular";

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//Google
import { GooglePlus } from "@ionic-native/google-plus";

//interfaces
import { IUsuario } from "../../Interfaces/IUsuario";

//servicios
import { CrearUsuarioProvider } from "../crear-usuario/crear-usuario";

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

//Local storage
import { Storage } from '@ionic/storage';

@Injectable()
export class GoogleProvider {

  usuario: IUsuario;

  constructor(public http: Http,
    private platform: Platform,
    private _fireAuth: AngularFireAuth,
    private google: GooglePlus,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private createUserService: CrearUsuarioProvider,
    private storage: Storage) {
    console.log('Hello GoogleProvider Provider');
  }

  signInWithGoogle() {

    const loading = this.loadingCtrl.create({
      content: 'Iniciando Sesión'
    });

    loading.present();

    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        return this.google.login({}).then(res => {
          loading.dismiss();
          const GOOGLECREDENTIAL = firebase.auth.GoogleAuthProvider.credential(res.idToken);
          firebase.auth().signInWithCredential(GOOGLECREDENTIAL);
          resolve();

        }).catch(err => {
          loading.dismiss();
          this.ErrorSesion();
        });

      } else {
        loading.present();
        this._fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
          loading.dismiss();

          this.usuario = {
            nombre: res.user.displayName,
            correo: res.user.email,
            foto: res.user.photoURL,
            telefono: 12345678
          }

          /*Se guarda usuario en localStorage*/
          var nombreUsuario=res.user.email.replace("@","").replace(".","");
          this.storage.set("nombreUsuario",nombreUsuario);

          /*Se crea usuario en firebase*/
          this.createUserService.crearUsuario(this.usuario).then(res => {
            resolve();
          });

        }).catch(err => {
          loading.dismiss();
          this.ErrorSesion();
        });
      }


    });
    return promesa;
  }

  ErrorSesion(): void {
    const alert = this.alertCtrl.create({
      title: 'Google',
      subTitle: 'Lo sentimos, ha ocurrido un error al intentar iniciar sesión desde Google',
      buttons: ['Cerrar']
    });

    alert.present();
  }

}
