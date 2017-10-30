import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Login } from '../../../Clases/Login/Login.cs'


@IonicPage()
@Component({
  selector: 'page-recordar-contrasena',
  templateUrl: 'recordar-contrasena.html',
})
export class RecordarContrasenaPage {


  formulario: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public login: Login,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private fb: FormBuilder) {

    this.formulario = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordarContrasenaPage');
  }

  RecordarContrasena() {
    let enviando = this.loadingCtrl.create({
      content: "Enviando correo"
    });
    enviando.present();

    this.login.RecordarContrasena(this.formulario.get('correo').value).then(res => {
      enviando.dismiss();

      this.alertCtrl.create({
        title: "Recordar contraseña",
        subTitle: "Te enviamos un correo para que puedas restablecer tu contraseña",
        buttons: [{
          text: 'Aceptar',
          role: 'cancel',
          handler: () => {
            this.navCtrl.pop();
          }
        }]
      }).present();

    }).catch(err => {
      enviando.dismiss();
      this.alertCtrl.create({
        title: "¡Ups!",
        subTitle: "Al parecer tu correo no se encuentra registrado, registrate para continuar",
        buttons: ["Aceptar"]
      }).present();
    });

  }

}
