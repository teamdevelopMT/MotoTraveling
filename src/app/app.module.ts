import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { OPTIONS } from './Config.firebase'

//Facebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

//Paginas
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login'
import { InicioPage } from "../pages/inicio/inicio";
import { TabsPage } from "../pages/tabs/tabs";
import { RutasPage } from "../pages/rutas/rutas";
import { NotificacionesPage } from "../pages/notificaciones/notificaciones";



//Components


//Google Maps
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { FacebookProvider } from '../providers/facebook/facebook';

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
    AngularFireModule.initializeApp(OPTIONS),
    AngularFirestoreModule,
    AngularFireAuthModule
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GoogleMaps,
    Geolocation,
    Facebook,
    FacebookProvider
  ]
})
export class AppModule { }
