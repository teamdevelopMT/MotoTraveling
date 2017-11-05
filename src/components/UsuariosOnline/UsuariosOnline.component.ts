import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { IUsuario } from './../../Interfaces/IUsuario';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { invitacionesRuta } from '../../Interfaces/invitacionesRuta';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'UsuariosOnline-component',
  templateUrl: 'UsuariosOnline.component.html'
})
export class UsuariosOnlineComponent {
 listaUsuariosOnline : IUsuario[];
 
 nombreUsuarioSession : string;

  constructor(private afDB: AngularFireDatabase, public alertCtrl: AlertController,private storage: Storage) {

    storage.get("nombreUsuario").then(respuesta => {
      this.nombreUsuarioSession = respuesta;
    })

    let promesa = new Promise((resolve, reject) => {
        const resultadoConsultaFire = this.afDB.list('usuarios').valueChanges();

        resultadoConsultaFire.subscribe(resp =>{
            this.listaUsuariosOnline = (resp as IUsuario[]).filter(filtro => filtro.estadoConexion == "On");
            
        });

    });
    

  }


crearInvitacionMapa(usuarioInvitado, ruta, usuarioCreadorRuta){

    var usuarioInvitadoIdentidad = usuarioInvitado.replace("@","").replace(".","");

        const alert = this.alertCtrl.create({
          title: 'Confirmacion de invitacion',
          message: 'Esta usted seguro de invitar a la ruta el usuario '+usuarioInvitadoIdentidad,
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
            
              }
            },
            {
              text: 'Aceptar',
              handler: () => {
               
                var list : Array<invitacionesRuta> = new Array<invitacionesRuta>();

                var invitacionRutaDTO : invitacionesRuta = new invitacionesRuta();
                
                  invitacionRutaDTO.estado = "pendiente";
                  invitacionRutaDTO.fecha = new Date().toString();
                  invitacionRutaDTO.usuarioInvitacion = usuarioCreadorRuta;
                  invitacionRutaDTO.ruta = ruta;

                  
                  list.push(invitacionRutaDTO);
                
                  let promesa = new Promise((resolve, reject) => {
                    this.afDB.list('invitacionesRuta/'+usuarioInvitadoIdentidad).push(invitacionRutaDTO).then(res => {
                      resolve();
                    });
                    
                  });
    
              }
            }
          ]
        });
        alert.present();
      }


    
}