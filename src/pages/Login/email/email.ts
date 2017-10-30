import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
//paginas
import { RecordarContrasenaPage } from "../recordar-contrasena/recordar-contrasena";
import { Login } from "../../../Clases/Login/Login.cs";
import { ILogin } from "../../../Interfaces/ILogin";
import { TabsPage } from "../../tabs/tabs";


@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {

  formulario: FormGroup;
  usuario: ILogin = {};
  recordarContrasenaPage: any = RecordarContrasenaPage;
  registroPage: any = RegistroPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private login: Login,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {

    this.formulario = this.fb.group({
      correo: ['', [Validators.required]],
      contrasena: ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
  }

  IniciarSesion() {
    let loading = this.loadingCtrl.create({
      content: "Iniciando sesíon"
    })
    loading.present();

    this.usuario.correo = this.formulario.get('correo').value;
    this.usuario.contrasena = this.formulario.get('contrasena').value;

    this.login.IniciarSesionCorreo(this.usuario).then(res => {
      loading.dismiss();
      this.navCtrl.setRoot(TabsPage);
    }).catch(err => {
      loading.dismiss();
      console.error("el error:" + err );
      switch (err.code) {
        case "auth/user-not-found":
          this.AlertaError("El correo electronico ingresado no se encuentra registrado");
          break;

        case "auth/wrong-password":
          this.AlertaError("Contraseña incorrecta");
          break;

        default:
          this.AlertaError("Correo o contraseña incorrectas")
          break;
      }

    });

  }

  AlertaError(mensaje) {
    this.alertCtrl.create({
      title: "Error al iniciar",
      subTitle: mensaje,
      buttons: ["Aceptar"]
    }).present();

  }


}
