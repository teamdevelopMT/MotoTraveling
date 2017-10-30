import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RedesSocialesPage } from '../pages/Login/redes-sociales/redes-sociales';
import { TabsPage } from '../pages/tabs/tabs'
//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

//Components
import { MapaComponent } from '../Components/Mapa/Mapa.component'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _fireAuth: AngularFireAuth) {

    this._fireAuth.authState.subscribe((user: firebase.User) => {
      console.log("usuario:"+user);
      if (!user) {
        this.rootPage = RedesSocialesPage;
        return;
      }
      this.rootPage = TabsPage;
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

