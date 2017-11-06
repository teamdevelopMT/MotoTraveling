import { ILogin } from "../../Interfaces/ILogin";
import { Platform } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app'
import { Injectable } from '@angular/core';
import { IUsuario } from '../../Interfaces/IUsuario'
import { Usuarios } from "../../Clases/Modulos/Usuarios/usuarios.cs";

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
        private storage: Storage,
        private usuarios: Usuarios,
        private afDB: AngularFireDatabase) {
    }

    RegistrarUsuario(datos: ILogin) {
        let promise = new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(datos.correo, datos.contrasena).then(res => {
                this.storage.set('_correo_', datos.correo);
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
                this.storage.set('_correo_', usuario.correo);
                var nombreUsuario = usuario.correo.replace(/\@/g, '');
                nombreUsuario = nombreUsuario.replace(/\./g, '');
                this.storage.set("nombreUsuario", nombreUsuario);

                this.afDB.object('usuarios/' + nombreUsuario)
                .update({ estadoConexion: true});

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
            this.storage.get('nombreUsuario').then((nombreUsu) => {

            this.afDB.object('usuarios/' + nombreUsu)
            .update({ estadoConexion: false}); 

            this.afAuth.auth.signOut().then(res => {
                console.log(res);
                resolve();
            });

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
                    firebase.auth().signInWithCredential(FACEBOOKCREDENTIAL).then(res => {

                        var nombreUsuario = res.email.replace(/\@/g, '');
                        nombreUsuario = nombreUsuario.replace(/\./g, '');
                        this.storage.set("nombreUsuario", nombreUsuario);

                        let usuario: IUsuario = {
                            idUsuario: nombreUsuario,
                            nombre: res.displayName,
                            correo: res.email,
                            foto: res.photoURL,
                            estadoConexion: true
                        }

                        this.usuarios.CrearUsuarios(usuario).then(res => {

                            this.afDB.object('usuarios/' + usuario.idUsuario)
                            .update({ estadoConexion: true});

                            resolve();
                        });

                    });
                });
            } else {
                return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
                    var nombreUsuario = res.user.email.replace(/\@/g, '');
                    nombreUsuario = nombreUsuario.replace(/\./g, '');
                    this.storage.set("nombreUsuario", nombreUsuario);
                    
                    let usuario: IUsuario = {
                        idUsuario: nombreUsuario,
                        nombre: res.user.displayName,
                        correo: res.user.email,
                        foto: res.user.photoURL,
                        estadoConexion: true
                    }

                    this.usuarios.CrearUsuarios(usuario).then(res => {

                        this.afDB.object('usuarios/' + usuario.idUsuario)
                        .update({ estadoConexion: true});

                        resolve();
                    });

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
                        var nombreUsuario = res.email.replace(/\@/g, '');
                        nombreUsuario = nombreUsuario.replace(/\./g, '');
                        this.storage.set("nombreUsuario", nombreUsuario);

                        let usuario: IUsuario = {
                            idUsuario: nombreUsuario,
                            nombre: res.displayName,
                            correo: res.email,
                            foto: res.photoURL,
                            estadoConexion: true
                        }
                        this.usuarios.CrearUsuarios(usuario).then(res => {

                            this.afDB.object('usuarios/' + usuario.idUsuario)
                            .update({ estadoConexion: true});

                            resolve();
                        });
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
                    var nombreUsuario = res.user.email.replace(/\@/g, '').replace(/\./g, '');
                    this.storage.set("nombreUsuario", nombreUsuario);

                    let usuario: IUsuario = {
                        idUsuario: nombreUsuario,
                        nombre: res.user.displayName,
                        correo: res.user.email,
                        foto: res.user.photoURL,
                        estadoConexion: true
                    }

                    this.usuarios.CrearUsuarios(usuario).then(res => {

                        this.afDB.object('usuarios/' + usuario.idUsuario)
                        .update({ estadoConexion: true});
                        
                        resolve();
                    });

                }).catch(err => {
                    console.error(err);
                    reject(err);
                });;
            }

        });

        return promesa;

    }

}