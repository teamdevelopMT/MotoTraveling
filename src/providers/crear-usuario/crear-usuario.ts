import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { usuario } from '../../Interfaces/usuario';

@Injectable()
export class CrearUsuarioProvider {
  usuario: Observable<usuario[]>;
  usuarioExistente: boolean = true;
  usuarioNuevo: usuario;
  llaveUsuario : string = "";
  constructor(private afDB: AngularFireDatabase) {
    
  }

  inicializarUsuarioNuevo(usuarioNuevoEntrada: usuario)
  {
    this.usuarioNuevo = usuarioNuevoEntrada;
     this.llaveUsuario = this.usuarioNuevo.correo.replace('@', '').replace('.','');
    try {
      this.usuario = this.afDB.object('usuarios/'+this.llaveUsuario.toString()).valueChanges();
    } catch (error) {
      this.usuario = null;
    }
    
  }
  crearUsuario() {
    console.log(this.usuario);
    //validar que exista usuario:
    this.usuario.forEach(respuestaUsuarioFire => {
      if(respuestaUsuarioFire != null)
      {
          console.log("El usuario con el correo: "+respuestaUsuarioFire.correo+" ya se encuentra registrado");
      }
      else
      {
        this.afDB.list('usuarios').set(this.llaveUsuario, this.usuarioNuevo).then(res => {
          console.log("usuario guardado correctamente");
        }).catch(err => {
          console.error(err);
        });
      }
       
  });

  }

}
