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
         var nombreUsuario=user.email.replace("@","").replace(".","");
 
         /*Subscripcion de invitaciones*/
         let promesa = new Promise((resolve, reject) => {
           const resultadoConsultaFire = this.afDB.object('invitacionesRuta/'+nombreUsuario).valueChanges();
     
           resultadoConsultaFire.subscribe(resp =>{
               this.invitacionRuta = (resp as invitacionesRuta);
     
               if(this.invitacionRuta!= null && this.invitacionRuta.estado == "pendiente")
               {
                   this.mostrarAlertaConfirmacion(this.invitacionRuta);
               }
           });
     
       });
        
        this.rootPage = TabsPage;
        }
        
      });

      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
      });
    });
  }

  mostrarAlertaConfirmacion(invitacionRuta) {

    this.storage.get('nombreUsuario').then(nombreUsuarioSession => {

      const alert = this.alertCtrl.create({
        title: 'Confirmacion de ubicacion',
        message: 'Tu amigo ' + invitacionRuta.usuarioInvitacion + ' te acaba de invitar a una ruta. ¿desea aceptar la invitacion?',
        buttons: [
          {
            text: 'Rechazar',
            role: 'cancel',
            handler: () => {
              invitacionRuta.estado = "Rechazada";
              this.afDB.object('invitacionesRuta/' + nombreUsuarioSession).update(invitacionRuta);
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              invitacionRuta.estado = "Aceptada";
              this.afDB.object('invitacionesRuta/' + nombreUsuarioSession).update(invitacionRuta);

              this.rutaUsuario = new rutaUsuarios();
              this.rutaUsuario.latitud = "0";
              this.rutaUsuario.longitud = "0";
              this.rutaUsuario.nombre = nombreUsuarioSession;

              let promesa = new Promise((resolve, reject) => {
                this.afDB.list('rutas/josedaniel9_5hotmailcom/rutaUsuarios').set(nombreUsuarioSession, this.rutaUsuario).then(res => {
                  this.rootPage = RutasPage;
                  resolve();
                }).catch(err => {
                  console.error(err);
                });
              });

            }
          }
        ]
      });
      alert.present();

    });
  }
}

