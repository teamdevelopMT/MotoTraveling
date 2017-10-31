import { ILogin } from "../../Interfaces/ILogin";
import { Platform } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { Injectable } from '@angular/core';

//Faccebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

//Google
import { GooglePlus } from "@ionic-native/google-plus";

//Local storage
import { Storage } from '@ionic/storage';

@Injectable()
export class Login {
    constructor(private afAuth: AngularFireAuth,
        private platform: Platform,
        private facebook: Facebook,
        private google: GooglePlus,
        private storage: Storage) {
    }

    RegistrarUsuario(datos: ILogin) {
        let promise = new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(datos.correo, datos.contrasena).then(res => {
                resolve();
            }).catch(err => {
                console.log(err);
                reject();
            });
        });
        return promise;
    }

    RecordarContrasena(correo: string) {
        let promise = new Promise((resolve, reject) => {
            this.afAuth.auth.sendPasswordResetEmail(correo).then(res => {
                console.log(res);
                resolve();
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
        return promise;
    }

    IniciarSesionCorreo(usuario: ILogin) {
        let promise = new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(usuario.correo, usuario.contrasena).then(res => {
                console.log(res);
                resolve();
            }).catch(err => {
                console.log(err);
                reject(err);
            })
        });
        return promise;
    }

    CerrarSesion() {
        let promise = new Promise((resolve, reject) => {
            this.afAuth.auth.signOut().then(res => {
                console.log(res);
                resolve();

            }).catch(err => {
                console.error(err);
                reject(err);
            })
        });
        return promise;
    }

    IniciarSesionFacebook() {
        let promise = new Promise((resolve, reject) => {
            if (this.platform.is('cordova')) {
                this.facebook.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
                    const FACEBOOKCREDENTIAL = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);

                    firebase.auth().signInWithCredential(FACEBOOKCREDENTIAL);
                    resolve();
                }).catch(err => {
                    console.error(err);
                    reject(err);
                });
            } else {
                return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
                    resolve()
                }).catch(err => {
                    console.error(err);
                    reject(err);
                });
            }
        });

        return promise;
    }

    IniciarSesionGoogle() {
        let promesa = new Promise((resolve, reject) => {
            if (this.platform.is('cordova')) {
                this.google.login({
                    'webClientId': '732314916080-ps2bss7aebhv06hcv1j96h1aqmdl2ern.apps.googleusercontent.com',
                    'offline': true
                }).then(res => {
                    firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(res => {
                        var nombreUsuario=res.user.email.replace("@","").replace(".","");
                        this.storage.set("nombreUsuario",nombreUsuario);
                        resolve();
                    }).catch(err => {
                        console.error(err);
                        reject(err);
                    });
                }).catch(err => {
                    console.error(err);
                    reject(err);
                });
            } else {
                this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
                    var nombreUsuario=res.user.email.replace("@","").replace(".","");
                    this.storage.set("nombreUsuario",nombreUsuario);
                    resolve();
                }).catch(err => {
                    console.error(err);
                    reject(err);
                });;
            }

        });

        return promesa;

    }

}