import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { OPTIONS } from './Config.firebase'
import { IonicStorageModule } from '@ionic/storage';
//Facebook
import { Facebook } from '@ionic-native/facebook';

//Google
import { GooglePlus } from "@ionic-native/google-plus";
import { GoogleMaps } from '@ionic-native/google-maps';

//Paginas
import { MyApp } from './app.component';
import { LoginPage } from "../pages/Inicio de sesion/login/login";
import { TabsPage } from "../pages/tabs/tabs";
import { InicioPage } from "../pages/modulos/inicio/inicio";
import { RutasPage } from "../pages/modulos/rutas/rutas";
import { NotificacionesPage } from "../pages/modulos/notificaciones/notificaciones";
import { MensajesPage } from '../pages/modulos/mensajes/mensajes';
import { PrincipalPage  } from "../pages/modulos/tiendas/principal/principal";

//Components
import { MapaComponent } from "../Components/Mapa/Mapa.component";
import { PerfilPage } from '../pages/modulos/perfil/perfil'

//Components

import { Geolocation } from '@ionic-native/geolocation';
import { FacebookProvider } from '../providers/facebook/facebook';

import { GoogleProvider } from '../providers/google/google';
import { CerrarSesionProvider } from '../providers/cerrar-sesion/cerrar-sesion';
import { CrearUsuarioProvider } from '../providers/crear-usuario/crear-usuario';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    InicioPage,
    RutasPage,
    NotificacionesPage,
    MapaComponent,
    PerfilPage,
    PrincipalPage,
    MensajesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    NotificacionesPage,
    MapaComponent,
    PerfilPage,
    PrincipalPage,
    MensajesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GoogleMaps,
    Geolocation,
    Facebook,
    GooglePlus,
    AngularFireDatabase,
    FacebookProvider,
    GoogleProvider,
    CerrarSesionProvider,
    CrearUsuarioProvider
  ]
})
export class AppModule { }
