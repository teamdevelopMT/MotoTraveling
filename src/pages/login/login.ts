import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

//Servicios
import { FacebookProvider } from "../../providers/facebook/facebook";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    private platform: Platform,
    private facebookService: FacebookProvider) {
  }

  LoginFacebook() {
    this.facebookService.signInWithFacebook();
  }

}
