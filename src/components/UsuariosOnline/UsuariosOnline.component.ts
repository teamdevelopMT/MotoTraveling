import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
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
 @Output() usuarioCreado = new EventEmitter(); 
 @Input() ruta: string;
 nombreUsuarioSession : string;
 suscripcionResultadoConsultaFire : any;

 result : any;
 resultadoConsultaFire: any

  constructor(private afDB: AngularFireDatabase, public alertCtrl: AlertController,private storage: Storage) {

    storage.get("nombreUsuario").then(respuesta => {
      this.nombreUsuarioSession = respuesta;
    })

  }


  ngOnInit() {
    let promesa = new Promise((resolve, reject) => {
      const resultadoConsultaFire = this.afDB.list('usuarios').valueChanges();

      this.suscripcionResultadoConsultaFire = resultadoConsultaFire.subscribe(resp =>{
          this.listaUsuariosOnline = (resp as IUsuario[]).filter(filtro => filtro.estadoConexion);
          
      });

  });
  }

  ngOnDestroy() {
    this.suscripcionResultadoConsultaFire.unsubscribe();
}


crearInvitacionMapa(usuarioInvitado, usuarioCreadorRuta){

    var usuarioInvitadoIdentidad = usuarioInvitado.replace(/\@/g, '').replace(/\./g, '');

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
                invitacionRutaDTO.ruta = this.ruta;
                                  
                list.push(invitacionRutaDTO);

               // let promesa = new Promise((resolve, reject) => {
                //const result = this.afDB.object('invitacionesRuta/' + usuarioInvitadoIdentidad+"/"+ usuarioInvitadoIdentidad+this.ruta+'/estado').valueChanges();

               // result.subscribe((res) => {
                  //if (res == null) {

                    this.afDB.list('invitacionesRuta/'+usuarioInvitadoIdentidad).set(usuarioInvitadoIdentidad+invitacionRutaDTO.ruta,invitacionRutaDTO).then(res => {
                          this.usuarioCreado.emit(true);
                        //   resolve();
                    });
                  //} else if (res != "Aceptada") {
                    //   this.afDB.list('invitacionesRuta/'+usuarioInvitadoIdentidad).set(usuarioInvitadoIdentidad+invitacionRutaDTO.ruta,invitacionRutaDTO).then(res => {
                      //    this.usuarioCreado.emit(true);
                         // resolve();
                      // });
                    //}
                 // else
                  //{
                    //   this.usuarioCreado.emit(false);
                   //   resolve();
                 // }
               // }, err => {
                 // resolve();
                //  console.error("error" + err);
               // });

             // });

                
                    
    
              }
            }
          ]
        });
        alert.present();
      }

      ngDestroy(){
              this.resultadoConsultaFire.unsubscribe();
        }
    
}