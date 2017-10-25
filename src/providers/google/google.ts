
import { Platform, AlertController, LoadingController } from "ionic-angular";

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//Google
import { GooglePlus } from "@ionic-native/google-plus";

//interfaces
import { usuario } from "../../Interfaces/usuario";

//servicios
import { CrearUsuarioProvider } from "../crear-usuario/crear-usuario";

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class GoogleProvider {

  usuario: usuario;

  constructor(public http: Http,
    private platform: Platform,
    private _fireAuth: AngularFireAuth,
    private google: GooglePlus,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private createUserService: CrearUsuarioProvider) {
    console.log('Hello GoogleProvider Provider');
  }

  signInWithGoogle() {

    const loading = this.loadingCtrl.create({
      content: 'Iniciando Sesión'
    });

    loading.present();

    if (this.platform.is('cordova')) {
      return this.google.login({}).then(res => {
        loading.dismiss();
        const GOOGLECREDENTIAL = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        firebase.auth().signInWithCredential(GOOGLECREDENTIAL);

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

        this.createUserService.crearUsuario(this.usuario);

        console.log(res);
      }).catch(err => {
        loading.dismiss();
        this.ErrorSesion();
      });
    }
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
