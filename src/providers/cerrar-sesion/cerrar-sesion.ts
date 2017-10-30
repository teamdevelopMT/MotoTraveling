import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { LoginPage } from "../../pages/Login/login/login";
// import { NavController } from 'ionic-angular';

//firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class CerrarSesionProvider {

  constructor(public http: Http,
    private _fireAuth: AngularFireAuth
  ) {
    console.log('Hello CerrarSesionProvider Provider');
  }

  //Cerrar sesion en firebase
  signOut() {
    let promesa = new Promise((resolve, reject) => {
      this._fireAuth.auth.signOut();
      resolve();
    });

    return promesa;


  }

}
