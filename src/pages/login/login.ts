import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'

//Facebook
import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  facebook: any = {
    img: ''
  }

  constructor(public navCtrl: NavController, private _fireAuth: AngularFireAuth, private fb: Facebook,
    private platform: Platform) {

    _fireAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.facebook.img = '';
        return;
      }
      this.facebook.img = user.photoURL;
      navCtrl.push(TabsPage);
    });

  }



  loginFacebook() {
    console.log('entro');

    if (this.platform.is('cordova')) {
      return this.fb.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
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

  logoutFacebook() {

    this._fireAuth.auth.signOut();

  }


}
