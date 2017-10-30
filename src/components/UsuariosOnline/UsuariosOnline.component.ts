import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { IUsuario } from './../../Interfaces/IUsuario';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'UsuariosOnline-component',
  templateUrl: 'UsuariosOnline.component.html'
})
export class UsuariosOnlineComponent {
 listaUsuariosOnline : IUsuario[];

  constructor(private afDB: AngularFireDatabase) {

    let promesa = new Promise((resolve, reject) => {
        const resultadoConsultaFire = this.afDB.list('usuarios').valueChanges();

        resultadoConsultaFire.subscribe(resp =>{
            this.listaUsuariosOnline = (resp as IUsuario[]).filter(filtro => filtro.estadoConexion == "On");
            
        });

    });
    

  }

    
}