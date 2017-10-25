import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Platform } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

//Servicios
import { FacebookProvider } from "../../../providers/facebook/facebook";
import { GoogleProvider } from "../../../providers/google/google";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    private platform: Platform,
    private facebookService: FacebookProvider,
    private googleService: GoogleProvider) {
  }

  LoginFacebook() {
    this.facebookService.signInWithFacebook();
  }

  LoginGoogle(){
    this.googleService.signInWithGoogle();
  }

}
