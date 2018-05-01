import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { IUsuario } from '../../Interfaces/IUsuario';
import { IInfoSalud } from "../../Interfaces/IEmergencia";

@Injectable()
export class CrearUsuarioProvider {
  usuario: Observable<IUsuario>;
  usuarioExistente: boolean = true;
  usuarioNuevo: IUsuario;
  llaveUsuario: string = "";
  constructor(private afDB: AngularFireDatabase) {

  }

  crearUsuario(usuario: IUsuario) {
    let idUsuario = usuario.correo.replace('@', '').replace('.', '');

    let promesa = new Promise((resolve, reject) => {
      const result = this.afDB.object('usuarios/' + idUsuario).valueChanges();

      result.subscribe((res) => {
        if (res == null) {
          this.afDB.list('usuarios').set(idUsuario, usuario).then(res => {
            resolve();

          }).catch(err => {
            resolve();
            console.error(err);
          });
        } else {
          resolve();
          console.log("existe usuario");
        }
      }, err => {
        resolve();
        console.error("error" + err);
      });

    });

    return promesa;
    //validar que exista usuario:
  }

  ConsultarInfoSalud(idUsuario: string) {
    let iinfoSalud: IInfoSalud;
    let promise = new Promise((resolve, reject) => {
      let infoSalud: Observable<IInfoSalud> = this.afDB.object('usuarios/' + idUsuario + '/emergencia/infosalud').valueChanges();
      infoSalud.subscribe(res => {
        if (res != null) {
          iinfoSalud = res;
        }
        resolve(iinfoSalud);

      })
    });
    return promise;
  }

  InsertarInfoSalud(idUsuario: string, infoSalud: IInfoSalud) {
    let promesa = new Promise((resolve, reject) => {

      const result = this.afDB.object('usuarios/' + idUsuario + '/emergencia/infoSalud').valueChanges();
      result.subscribe(res => {
        if (res == null) {
          this.afDB.list('usuarios/' + idUsuario)
            .set("emergencia",
              {"infosalud":{ "EPS": infoSalud.EPS, "TipoSangre": infoSalud.TipoSangre, "Documento": infoSalud.Documento }})
            .then(resp => {
              resolve();
            })
            .catch(err => reject(err));
        } else {
          this.afDB.list('usuarios/' + idUsuario + '/emergencia')
            .update("infosalud", { "EPS": infoSalud.EPS, "TipoSangre": infoSalud.TipoSangre, "Documento": infoSalud.Documento })
            .then(resp => {
              resolve();
            })
            .catch(err => {
              reject(err);
            });
        }
      })

    });
    return promesa;


  }

}
