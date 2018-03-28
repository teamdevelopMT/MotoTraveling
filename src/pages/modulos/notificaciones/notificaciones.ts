import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ToastController } from 'ionic-angular';

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
import { Subscribe } from '@firebase/util';

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

  resultadoConsultaFire: any;
  invitacionesRutaPendientes: Array<invitacionesRuta> = new Array<invitacionesRuta>();
  invitacionesRutaContestadas: Array<invitacionesRuta> = new Array<invitacionesRuta>();
  rutaUsuario: rutaUsuarios;
  rootPage: any;
  paginaRuta : RutasPage;
  nombreUsuarioSession : string;
  suscripcionResultadoConsultaFire: any;
  constructor(
    public navParams: NavParams,
    private _fireAuth: AngularFireAuth,
    private storage: Storage,
    private afDB: AngularFireDatabase,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
  ) {

  }


  ngOnInit() {
    /*Subscripcion de invitaciones*/
    this.storage.get('nombreUsuario').then((nombreUsuario) => {
      this.nombreUsuarioSession = nombreUsuario;
    let promesa = new Promise((resolve, reject) => {
      this.resultadoConsultaFire = this.afDB.list('invitacionesRuta/'+this.nombreUsuarioSession).valueChanges();
      var fechaActual = new Date();
      
      this.suscripcionResultadoConsultaFire = this.resultadoConsultaFire.subscribe(resp =>{
          this.invitacionesRutaPendientes = (resp as Array<invitacionesRuta>).filter(filtro => filtro.estado == "pendiente");
          this.invitacionesRutaContestadas = (resp as Array<invitacionesRuta>).filter(filtro => filtro.estado != "pendiente");
        });
      });

    });

  }
  
  ngOnDestroy() {
      this.suscripcionResultadoConsultaFire.unsubscribe();
  }


  mostrarAlertaConfirmacion(invitacionRuta) {
    
          const alert = this.alertCtrl.create({
            title: 'Confirmacion de ubicacion',
            message: 'Tu amigo ' + invitacionRuta.usuarioInvitacion + ' te acaba de invitar a una ruta. ¿desea aceptar la invitacion?',
            buttons: [
              {
                text: 'Rechazar',
                handler: () => {
                  this.afDB.object('invitacionesRuta/' + this.nombreUsuarioSession+'/'+this.nombreUsuarioSession+invitacionRuta.ruta)
                  .update({ estado: "Rechazada"}); 
                }
              },
              {
                text: 'Aceptar',
                handler: () => {
                  invitacionRuta.estado = "Aceptada";
                  this.afDB.object('invitacionesRuta/' + this.nombreUsuarioSession+'/'+this.nombreUsuarioSession+invitacionRuta.ruta)
                  .update({ estado: "Aceptada"}); 
    
                  this.rutaUsuario = new rutaUsuarios();
                  this.rutaUsuario.latitud = "0";
                  this.rutaUsuario.longitud = "0";
                  this.rutaUsuario.nombre = this.nombreUsuarioSession;
    
                  let promesa = new Promise((resolve, reject) => {
                    this.afDB.list('rutas/'+invitacionRuta.ruta+'/rutaUsuarios').set(this.nombreUsuarioSession, this.rutaUsuario).then(res => {
                      this.mostrarToast('Invitación aceptada correctamente');
                      
                      this.storage.set("nombreRutaAceptada",invitacionRuta.ruta);
                      this.navCtrl.parent.select(1,{test:"si"});
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
    
      }


      mostrarToast(mensaje){
        let toast = this.toastCtrl.create({
         message: mensaje,
         duration: 3000,
         position: 'top'
       });
       toast.present();
      }

}
