import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';

//Local Storage
import { IonicStorageModule } from '@ionic/storage';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { OPTIONS } from './Config.firebase'

//Facebook
import { Facebook } from '@ionic-native/facebook';

//Google
import { GooglePlus } from "@ionic-native/google-plus";
import { GoogleMaps } from '@ionic-native/google-maps';

//Paginas
import { MyApp } from './app.component';
// import { LoginPage } from "../pages/login/login/login";
import { TabsPage } from "../pages/tabs/tabs";
import { InicioPage } from "../pages/modulos/inicio/inicio";
import { RutasPage } from "../pages/modulos/rutas/rutas";
import { NotificacionesPage } from "../pages/modulos/notificaciones/notificaciones";
import { MensajesPage } from '../pages/modulos/mensajes/mensajes';
import { PrincipalPage } from "../pages/modulos/tiendas/principal/principal";
import { PerfilPage } from '../pages/modulos/perfil/perfil'

//Login
import { EmailPage } from "../pages/Login/email/email";
import { RegistroPage} from '../pages/Login/registro/registro'
import { RedesSocialesPage } from "../pages/Login/redes-sociales/redes-sociales";
import { RecordarContrasenaPage } from "../pages/Login/recordar-contrasena/recordar-contrasena";

//clases
import {Login} from '../Clases/Login/Login.cs'
//Components
import { MapaComponent } from "../Components/Mapa/Mapa.component";
import { EncabezadoComponent } from "../components/encabezado/encabezado";
import { UsuariosOnlineComponent } from "../Components/UsuariosOnline/UsuariosOnline.component";


import { Geolocation } from '@ionic-native/geolocation';
import { FacebookProvider } from '../providers/facebook/facebook';
import { Gyroscope } from '@ionic-native/gyroscope';

import { GoogleProvider } from '../providers/google/google';
import { CerrarSesionProvider } from '../providers/cerrar-sesion/cerrar-sesion';
import { CrearUsuarioProvider } from '../providers/crear-usuario/crear-usuario';
import { LoginProvider } from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,
    EmailPage,
    RedesSocialesPage,
    RegistroPage,
    RecordarContrasenaPage,
    TabsPage,
    InicioPage,
    RutasPage,
    NotificacionesPage,
    MapaComponent,
    EncabezadoComponent,
    PerfilPage,
    PrincipalPage,
    MensajesPage,
    UsuariosOnlineComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      platforms: {
        android:{
          tabsPlacement: 'top', 
          pageTransition:'md-transition'
        }
      }
      
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(OPTIONS),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmailPage,
    RedesSocialesPage,
    RegistroPage,
    RecordarContrasenaPage,
    TabsPage,
    InicioPage,
    RutasPage,
    NotificacionesPage,
    MapaComponent,
    EncabezadoComponent,
    PerfilPage,
    PrincipalPage,
    MensajesPage,
    UsuariosOnlineComponent
  ],
  providers: [
    StatusBar,
    Login,
    SplashScreen,
    Network,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GoogleMaps,
    Geolocation,
    Facebook,
    GooglePlus,
    FacebookProvider,
    GoogleProvider,
    CerrarSesionProvider,
    CrearUsuarioProvider,
    LoginProvider,
    Gyroscope
  ]
})
export class AppModule { }
