import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class CerrarSesionProvider {

  constructor(public http: Http,
    private _fireAuth:AngularFireAuth) {
    console.log('Hello CerrarSesionProvider Provider');
  }

  //Cerrar sesion en firebase
  signOut() {
    this._fireAuth.auth.signOut();
  }

}
