import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { usuario } from './../../Interfaces/usuario';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'UsuariosOnline-component',
  templateUrl: 'UsuariosOnline.component.html'
})
export class UsuariosOnlineComponent {
 listaUsuariosOnline : usuario[];

  constructor(private afDB: AngularFireDatabase) {

    let promesa = new Promise((resolve, reject) => {
        const resultadoConsultaFire = this.afDB.list('usuarios').valueChanges();

        resultadoConsultaFire.subscribe(resp =>{
            this.listaUsuariosOnline = (resp as usuario[]).filter(filtro => filtro.estadoConexion == "On");
            
        });

    });
    

  }

    
}