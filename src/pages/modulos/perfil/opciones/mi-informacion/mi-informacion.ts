import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { IUsuario } from "../../../../../Interfaces/IUsuario";
import { IInfoSalud } from '../../../../../Interfaces/IEmergencia';
import { CrearUsuarioProvider } from "../../../../../providers/crear-usuario/crear-usuario";

@IonicPage()
@Component({
  selector: 'page-mi-informacion',
  templateUrl: 'mi-informacion.html',
})
export class MiInformacionPage {

  usuario: IUsuario;
  eps: string = "";
  tipoSangre: string = "";
  documento: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private UsuarioService: CrearUsuarioProvider,
    private modalCtrl: ModalController) {
    this.usuario = this.navParams.data;

    this.UsuarioService.ConsultarInfoSalud(this.usuario.idUsuario).then(res => {
      if (res) {
        this.eps = res["EPS"];
        this.tipoSangre = res["TipoSangre"];
        this.documento = res["Documento"]
      }
    });

  }

  ionViewDidLoad() {
  }

  GuardarData() {
    const infoSalud: IInfoSalud = {
      EPS: this.eps,
      TipoSangre: this.tipoSangre,
      Documento: this.documento
    }
    this.UsuarioService.InsertarInfoSalud(this.usuario.idUsuario, infoSalud);
  }

  AgregarOpcion(tipo: string) {
   let modal= this.modalCtrl.create("AgregarOpcionesPage", { 'tipodatoEmergencia': tipo });
   modal.present();
  }


}
