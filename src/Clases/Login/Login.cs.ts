import { ILogin } from "../../Interfaces/ILogin";
import { Platform } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { Injectable } from '@angular/core';

//Faccebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

//Google
import { GooglePlus } from "@ionic-native/google-plus";

@Injectable()
export class Login {
    constructor(private afAuth: AngularFireAuth,
        private platform: Platform,
        private facebook: Facebook,
        private google: GooglePlus) {
    }

    RegistrarUsuario(datos: ILogin) {
        let promise = new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(datos.correo, datos.contrasena).then(res => {
                console.log(res);
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
                return this.facebook.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
                    const FACEBOOKCREDENTIAL = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                    return firebase.auth().signInWithCredential(FACEBOOKCREDENTIAL);
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
                return this.google.login({}).then(res => {
                    const GOOGLECREDENTIAL = firebase.auth.GoogleAuthProvider.credential(res.idToken);
                    return firebase.auth().signInWithCredential(GOOGLECREDENTIAL);
                }).catch(err => {
                    console.error(err);
                    reject(err);
                });
            } else {
                this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
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