import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { usuario } from '../../Interfaces/usuario';

@Injectable()
export class CrearUsuarioProvider {
  usuario: Observable<usuario>;
  usuarioExistente: boolean = true;
  usuarioNuevo: usuario;
  llaveUsuario : string = "";
  constructor(private afDB: AngularFireDatabase) {
    
  }

  crearUsuario(usuario: usuario) {
    let idUsuario = usuario.correo.replace('@', '').replace('.', '');

    let promesa = new Promise((resolve, reject) => {
      const result = this.afDB.object('usuarios/' + idUsuario).valueChanges();

      result.subscribe(res => {
        if (res == null) {
          this.afDB.list('usuarios').set(idUsuario, usuario).then(res => {
            resolve();
          }).catch(err => {
            console.error(err);
          });
        } else {
          resolve();
          console.log("existe usuario");
        }
      }, err => {
        console.error("error" + err);
      });
    
    });

    return promesa;
    //validar que exista usuario:
  }

}
