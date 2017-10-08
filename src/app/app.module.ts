import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {OPTIONS} from './Config.firebase'

//Facebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login'
import { LoginProvider } from '../providers/login/login';

//Components
import {MapaComponent} from '../Components/Mapa/Mapa.component'

//Google Maps
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp, 
    LoginPage,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(OPTIONS),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    LoginPage,
    MapaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMaps,
    Geolocation,
    LoginProvider,
    Facebook
  ]
})
export class AppModule {}
