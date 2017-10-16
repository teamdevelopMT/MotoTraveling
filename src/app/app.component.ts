import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from "../pages/tabs/tabs";
import { Storage } from '@ionic/storage';

//service
import { NetworkProvider } from "../providers/network/network";
import { ValidarUsuarioProvider } from "../providers/validar-usuario/validar-usuario";

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
    private storage: Storage,
    private network: NetworkProvider,
    private validarUsuService: ValidarUsuarioProvider) {

    platform.ready().then(() => {
      this.storage.get("userLogin").then((value) => {
        this.login = value;
      });

      if (this.login != null) {
        this.rootPage = TabsPage;
        return;
      }

      _fireAuth.authState.subscribe((user: firebase.User) => {
        if (!user) {
          this.rootPage = LoginPage;
          return;
        }

        this.validarUsuService.ConsultarUsuario(user.email.split('@')[0], user.email)

        this.storage.set("userLogin", user.displayName.toString());
        this.rootPage = TabsPage;
      });


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

