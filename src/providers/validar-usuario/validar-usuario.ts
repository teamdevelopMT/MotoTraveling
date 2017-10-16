import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ValidarUsuarioProvider {


  constructor(private afDB: AngularFireDatabase) {

  }

  ConsultarUsuario(user: string, correo: string) {

    this.afDB.list<usuario>('usuarios/' + user).valueChanges().subscribe((data) => {
      
    });

    console.log("usuarios registrados:");


  }

}
interface usuario {
  correo: string,
  nombre: string

}
