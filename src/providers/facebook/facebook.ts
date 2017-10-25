import { AngularFireDatabase } from 'angularfire2/database';
import { usuario } from './../../Interfaces/usuario';
import { Injectable } from '@angular/core';
import { Platform, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';


import 'rxjs/add/operator/map';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


//Faccebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class FacebookProvider {

  usuario:usuario;

  constructor(public http: Http,
    private platform: Platform,
    private facebook: Facebook,
    private _fireAuth: AngularFireAuth,
    private storage: Storage,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private firedb:AngularFireDatabase) {

  }

  //Inicio de sesion en facebook
  signInWithFacebook() {
    const loading = this.loadingCtrl.create({
      content: 'Iniciando Sesión'
    });

    loading.present();

    if (this.platform.is('cordova')) {
      return this.facebook.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
        loading.dismiss();
        const FACEBOOKCREDENTIAL = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(FACEBOOKCREDENTIAL);
      }).catch(err => {
        loading.dismiss();
        this.ErrorSesion();
      });

    } else {
      this._fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
          loading.dismiss();
          
        
          console.log(res);
        }).catch(err => {
          loading.dismiss();
          this.ErrorSesion();
        });
    }
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
