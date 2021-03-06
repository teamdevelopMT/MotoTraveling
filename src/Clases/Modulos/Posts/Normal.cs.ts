import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase'
import { Observable } from 'rxjs/Observable';
import { Usuarios } from "../Usuarios/usuarios.cs";

@Injectable()
export class Normal {

    constructor(public af: AngularFireDatabase,
        private usuarios: Usuarios) {
    }
    SubirPost(post: any) {
        let promise = new Promise((resolve, reject) => {
            this.af.database.ref('/post/normal').push(post).then(res => {
                resolve();
            });
        });
        return promise;
    }

    ConsultarPost() {
        /*var a = this.af.list('post/normal').snapshotChanges().map(posts => {
           
            return posts.map(action => ({ key: action.key, ...action.payload.val() }));
        });*/

        let result: Observable<any[]> = this.af.list('post/normal').valueChanges().map(posts => {
            for (let post of posts) {
                post["usuario"] = this.af.object('/usuarios/' + post["idUsuario"]).valueChanges();          
            }
            return posts.reverse();
        });
        return result;
    }

    actualizar(post:any){
        let promise = new Promise((resolve, reject) => {
            this.af.object('/post/normal/'+post.key).update(post).then(res => {
                resolve();
            });
        });
        return promise;
    }

}