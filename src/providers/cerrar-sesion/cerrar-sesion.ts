import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { LoginPage } from "../../pages/Login/login/login";
// import { NavController } from 'ionic-angular';

//firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

//Local storage
import { Storage } from '@ionic/storage';

@Injectable()
export class CerrarSesionProvider {

  constructor(public http: Http,
    private _fireAuth: AngularFireAuth,
    private storage: Storage
  ) {
    console.log('Hello CerrarSesionProvider Provider');
  }

  //Cerrar sesion en firebase
  signOut() {
    let promesa = new Promise((resolve, reject) => {
      this._fireAuth.auth.signOut();
      this.storage.clear();
      resolve();
    });

    return promesa;


  }

}
