import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookProvider } from "../../providers/facebook/facebook";

// paginas

import { InicioPage } from "../modulos/inicio/inicio";
import { RutasPage } from "../modulos/rutas/rutas";
import { MensajesPage } from "../modulos/mensajes/mensajes";
import { PrincipalPage } from "../modulos/tiendas/principal/principal";
import { NotificacionesPage } from "../modulos/notificaciones/notificaciones";

import { PerfilPage } from "../modulos/perfil/perfil";

//DTO
import { invitacionesRuta } from './../../Interfaces/invitacionesRuta';

//Fire base
import { AngularFireDatabase } from 'angularfire2/database';

//Local storage
import { Storage } from '@ionic/storage';
import { IUsuario } from '../../Interfaces/IUsuario';

import { Usuarios } from '../../Clases/Modulos/Usuarios/usuarios.cs';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  inicio: any;
  rutas: any;
  mensajes: any;
  tiendas: any;
  notificaciones: any;
  perfil: any = PerfilPage;
  nombreUsuarioSession: string;
  cantidadInvitacionesRutaPendientes: any
  suscripcionResultadoConsultaFire: any;
  foto: string = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private afDB: AngularFireDatabase,
    private usuarios: Usuarios) {

    this.inicio = InicioPage;
    this.rutas = RutasPage;
    this.tiendas = PrincipalPage;
    this.mensajes = MensajesPage;
    this.notificaciones = NotificacionesPage;

    this.storage.get('nombreUsuario').then((nombreUsuario) => {
      this.usuarios.ConsultarUsuario(nombreUsuario).then(usu => {
        if (usu["foto"] == '')
          usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
        this.foto =  usu["foto"];
      })
      console.log(nombreUsuario);
    });

  }

  ngOnInit() {
    /*Subscripcion de invitaciones*/
    this.storage.get('nombreUsuario').then((nombreUsuario) => {
      this.nombreUsuarioSession = nombreUsuario;
      let promesa = new Promise((resolve, reject) => {
        const resultadoConsultaFire = this.afDB.list('invitacionesRuta/' + this.nombreUsuarioSession).valueChanges();
        var fechaActual = new Date();

        this.suscripcionResultadoConsultaFire = resultadoConsultaFire.subscribe(resp => {
          this.cantidadInvitacionesRutaPendientes = (resp as Array<invitacionesRuta>).filter(filtro => filtro.estado == "pendiente").length;
        });
      });

    });
  }

  ngOnDestroy() {
    if (this.suscripcionResultadoConsultaFire != undefined)
      this.suscripcionResultadoConsultaFire.unsubscribe();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  llamarPerfil() {
    this.navCtrl.push(PerfilPage);

  }

}
