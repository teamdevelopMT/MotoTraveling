import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RedesSocialesPage } from '../pages/Login/redes-sociales/redes-sociales';



import { TabsPage } from "../pages/tabs/tabs";
import { RutasPage } from "../pages/modulos/rutas/rutas";

import { rutaUsuarios } from './../Interfaces/rutaUsuarios';
import { invitacionesRuta } from './../Interfaces/invitacionesRuta';
import { AngularFireDatabase } from 'angularfire2/database';

//Local storage
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
  invitacionRuta: invitacionesRuta;
  rutaUsuario: rutaUsuarios;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _fireAuth: AngularFireAuth,
    private storage: Storage,
    private afDB: AngularFireDatabase,
    public alertCtrl: AlertController) {
  

    const AUTENTICACION = _fireAuth.authState.subscribe((user: firebase.User) => {

      this._fireAuth.authState.subscribe((user: firebase.User) => {
        console.log("usuario:" + user);
        if (!user) {
          this.rootPage = RedesSocialesPage;
          return;
        }
        else
        {
          
        this.rootPage = TabsPage;
        }
        
      });

      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
      });
    });
  }

  
}

