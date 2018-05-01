import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Login } from "../../../Clases/Login/Login.cs";
import { ILogin } from "../../../Interfaces/ILogin";



//paginas
import { EmailPage } from "../email/email";

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  formulario: FormGroup;
  usuario: ILogin = {};
  emailPage: any = EmailPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private login: Login,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {

    this.formulario = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,18}$/)]]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }


  RegistrarUsuario() {

    let creandoUsuario = this.loadingCtrl.create({
      content: "Espera por favor, estamos creando tu cuenta"
    });

    creandoUsuario.present();

    this.usuario.correo = this.formulario.get('correo').value;
    this.usuario.contrasena = this.formulario.get('contrasena').value;

    this.login.RegistrarUsuario(this.usuario).then(res => {
      creandoUsuario.dismiss();
    }).catch(err => {

      creandoUsuario.dismiss();

      this.alertCtrl.create({
        title: "Algo salio mal",
        subTitle: "El correo ingresado ya se encuentra registrado",
        buttons: ["Aceptar"]
      }).present();
    });;
  }


}
