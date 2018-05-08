import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IUsuario } from "../../../../../Interfaces/IUsuario"
import { AngularFireDatabase } from 'angularfire2/database';
import { rutas } from '../../../../../Interfaces/rutas';
import { rutaUsuarios } from '../../../../../Interfaces/rutaUsuarios';

@IonicPage()
@Component({
  selector: 'page-mis-rutas',
  templateUrl: 'mis-rutas.html',
})
export class MisRutasPage {

  usuario:IUsuario;
  rutasRealizada: Array<any> = new Array<any>();
  imagenRutaMaps : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase) {
    this.usuario = this.navParams.data;
    
    const resultadoRutaFire = this.afDB.list('rutas').valueChanges();

        let suscripcionResultadoRutaFire = resultadoRutaFire.subscribe(listRutas =>{
          listRutas.forEach(ruta => {
            let rutaObj = (ruta as rutas);
            
            if(rutaObj.rutaUsuarios != undefined)
            {

            
            var listaRutaUsuarios = Object.keys(rutaObj.rutaUsuarios).map(function (key) { return rutaObj.rutaUsuarios[key]; });
           if(listaRutaUsuarios.find(f => f.nombre == this.usuario.idUsuario) != undefined)
           {
              this.imagenRutaMaps= "https://maps.googleapis.com/maps/api/staticmap";

              //Set the Google Map Center.
              this.imagenRutaMaps += "?center="+rutaObj.origen+"|"+rutaObj.destino+"";
        
              //Set the Google Map Size.
              this.imagenRutaMaps += "&size=640x400";
        
              //Set the Google Map Zoom.
              this.imagenRutaMaps += "&zoom=" + 11;
        
              //Set the Google Map Type.
              this.imagenRutaMaps += "&maptype=" + "roadmap";
        
              //Origen
              this.imagenRutaMaps += "&markers=color:red|label:O|"+rutaObj.origen+"";

              //Destino
              this.imagenRutaMaps += "&markers=color:green|label:D|"+rutaObj.destino+"";

              //Ruta
              this.imagenRutaMaps += "&path=color:0x0000ff|weight:5|"+rutaObj.origen+"|"+rutaObj.destino+"";
              
              this.rutasRealizada.push({
               objRuta: rutaObj,
               rutaImagen :this.imagenRutaMaps
              });
           }

          }
          });

        

          suscripcionResultadoRutaFire.unsubscribe();
      });
  }

}
