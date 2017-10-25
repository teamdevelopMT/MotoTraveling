import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { usuario } from '../../Interfaces/usuario';

@Injectable()
export class CrearUsuarioProvider {
  usuarios: Observable<usuario[]>;
  constructor(private afDB: AngularFireDatabase) {

  }

  crearUsuario(usuario: usuario) {

    //validar que exista usuario:

    let result = this.afDB.list('usuarios/' + usuario.correo.replace('@', '.')).valueChanges();

    this.usuarios.subscribe(res => {
      if (res.values != null) {
        console.log("existe");
      } else {
        this.afDB.list('usuarios').set(usuario.correo.replace('@', '.'), usuario).then(res => {
          console.log("guardo correctamente");
        }).catch(err => {
          console.error(err);
        });
      }

    });



  }

}
