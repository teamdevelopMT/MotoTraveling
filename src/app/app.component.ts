import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/Inicio de sesion/login/login';
import { TabsPage } from "../pages/tabs/tabs";
import { Storage } from '@ionic/storage';


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

  login: string;
  connetion: boolean = true;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _fireAuth: AngularFireAuth,
    private storage: Storage) {

    platform.ready().then(() => {

      _fireAuth.authState.subscribe((user: firebase.User) => {

        if (!user) { this.rootPage = LoginPage; }
        else { this.rootPage = TabsPage; }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

