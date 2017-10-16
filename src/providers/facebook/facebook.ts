import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
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

  constructor(public http: Http,
    private platform: Platform,
    private facebook: Facebook,
    private _fireAuth: AngularFireAuth,
    private storage: Storage) {

  }

  //Inicio de sesion en facebook
  signInWithFacebook() {

    if (this.platform.is('cordova')) {
      return this.facebook.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
        const FACEBOOKCREDENTIAL = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(FACEBOOKCREDENTIAL);
      });

    } else {
      this._fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
          // this.facebook.img = res.user.photoURL;
          console.log(res);
        })
    }
  }

  //Cerrar sesion en facebook
  signOut() {

    this.storage.remove("userLogin");
    this._fireAuth.auth.signOut();
  }


}
