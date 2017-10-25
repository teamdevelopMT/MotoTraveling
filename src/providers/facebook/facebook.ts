import { AngularFireDatabase } from 'angularfire2/database';
import { usuario } from './../../Interfaces/usuario';
import { Injectable } from '@angular/core';
import { Platform, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

//servicios
import { CrearUsuarioProvider } from "../crear-usuario/crear-usuario";

import 'rxjs/add/operator/map';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


//Faccebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class FacebookProvider {

  usuario: usuario;

  constructor(public http: Http,
    private platform: Platform,
    private facebook: Facebook,
    private _fireAuth: AngularFireAuth,
    private storage: Storage,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private firedb: AngularFireDatabase,
    private createUserService: CrearUsuarioProvider) {

  }

  //Inicio de sesion en facebook
  signInWithFacebook() {
    const loading = this.loadingCtrl.create({
      content: 'Iniciando Sesión'
    });

    loading.present();

    let promesa = new Promise((resolve, reject)=>{
      if (this.platform.is('cordova')) {
        return this.facebook.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
          loading.dismiss();
          const FACEBOOKCREDENTIAL = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          resolve();
          return firebase.auth().signInWithCredential(FACEBOOKCREDENTIAL);


        }).catch(err => {
          resolve();
          loading.dismiss();
          this.ErrorSesion();
        });

      } else {
        this._fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
          .then(res => {

            this.usuario = {
              nombre: res.user.displayName,
              correo: res.user.email,
              foto: res.user.photoURL,
              telefono: 12345678
            }
  
            this.createUserService.crearUsuario(this.usuario).then(res => {
              resolve();
            });

            loading.dismiss();
            console.log(res);
          }).catch(err => {
            resolve();
            loading.dismiss();
            console.error("error:" + err);
            this.ErrorSesion();
          });
      }

    });

    return promesa;

  }

  ErrorSesion() {
    const alert = this.alertCtrl.create({
      title: 'Facebook',
      subTitle: 'Lo sentimos, ha ocurrido un error al intentar iniciar sesión desde Facebook',
      buttons: ['Cerrar']
    });

    alert.present();
  }

}
