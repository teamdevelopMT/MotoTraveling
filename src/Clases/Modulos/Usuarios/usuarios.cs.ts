
import { IUsuario } from "../../../Interfaces/IUsuario";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from "firebase";
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SubirFotosProvider } from "../../../providers/subir-fotos/subir-fotos";

@Injectable()
export class Usuarios {
    constructor(private afDB: AngularFireDatabase,
        private subirFotosService: SubirFotosProvider) {
    }

    ValidarUsuarioRegistrado(idUsuario: string) {
        let promise = new Promise((resolve, reject) => {
            let validacion = this.afDB.object('usuarios/' + idUsuario).valueChanges().subscribe(res => {
                if (res == null) {
                    validacion.unsubscribe();
                    resolve(false);
                }
                else {
                    validacion.unsubscribe();
                    resolve(true);
                }
            });
        });

        return promise;
    }

    CrearUsuarios(usuario: IUsuario) {
        let promise = new Promise((resolve, reject) => {
            this.subirFotosService.SubirFotosFirebase('img_perfil', usuario.foto).then(res => {
                usuario.foto = res.toString();
                this.afDB.list('usuarios').set(usuario.idUsuario, usuario).then(res => {
                    resolve();
                });
            });
        });

        return promise;

    }

    ConsultarUsuario(idUsuario: string) {
        let promise = new Promise((resolve, reject) => {
            let usuario: Observable<IUsuario> = this.afDB.object('usuarios/' + idUsuario).valueChanges();

           let usuarioData = usuario.subscribe(res => {
                let usuarios :IUsuario = res;
                usuarioData.unsubscribe();
                resolve(usuarios);
            })   
        });

        return promise;
    }
}