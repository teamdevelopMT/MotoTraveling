import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { OPTIONS } from './Config.firebase'
import { IonicStorageModule } from '@ionic/storage';
//Facebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

//Paginas
import { MyApp } from './app.component';
import { LoginPage } from "../pages/login/login";
import { TabsPage } from "../pages/tabs/tabs";
import { InicioPage } from "../pages/inicio/inicio";
import { RutasPage } from "../pages/rutas/rutas";
import { NotificacionesPage } from "../pages/notificaciones/notificaciones";
//Components


//Google Maps
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { FacebookProvider } from '../providers/facebook/facebook';
import { NetworkProvider } from '../providers/network/network';
import { ValidarUsuarioProvider } from '../providers/validar-usuario/validar-usuario';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    InicioPage,
    RutasPage,
    NotificacionesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(OPTIONS),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    InicioPage,
    RutasPage,
    NotificacionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GoogleMaps,
    Geolocation,
    Facebook,
    AngularFireDatabase,
    FacebookProvider,
    NetworkProvider,
    ValidarUsuarioProvider
  ]
})
export class AppModule { }
