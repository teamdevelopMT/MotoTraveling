import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { rutaUsuarios } from './../../../Interfaces/rutaUsuarios';
import { invitacionesRuta } from './../../../Interfaces/invitacionesRuta';
import { AngularFireDatabase } from 'angularfire2/database';

//Pages
import { RutasPage } from "../../../pages/modulos/rutas/rutas";

//Local storage
import { Storage } from '@ionic/storage';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

//Components
import { MapaComponent } from '../../../Components/Mapa/Mapa.component'

/**
 * Generated class for the NotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {

  invitacionesRuta: Array<invitacionesRuta> = new Array<invitacionesRuta>();
  rutaUsuario: rutaUsuarios;
  rootPage: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _fireAuth: AngularFireAuth,
    private storage: Storage,
    private afDB: AngularFireDatabase,
    public alertCtrl: AlertController) {

   
    /*Subscripcion de invitaciones*/
    storage.get('nombreUsuario').then((val) => {
    let promesa = new Promise((resolve, reject) => {
      const resultadoConsultaFire = this.afDB.list('invitacionesRuta/'+val).valueChanges();

      resultadoConsultaFire.subscribe(resp =>{
          this.invitacionesRuta = (resp as Array<invitacionesRuta>);

          if(this.invitacionesRuta!= null)
          {
            this.invitacionesRuta.forEach(inivitacion => {
                console.log(inivitacion);
            });
          }
        });
      });

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionesPage');
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
