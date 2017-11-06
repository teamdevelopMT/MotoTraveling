import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Keyboard } from "@ionic-native/keyboard";

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

import { TabsPage } from "../pages/tabs/tabs";
import { InicioPage } from "../pages/modulos/inicio/inicio";
import { RutasPage } from "../pages/modulos/rutas/rutas";
import { NotificacionesPage } from "../pages/modulos/notificaciones/notificaciones";
import { MensajesPage } from '../pages/modulos/mensajes/mensajes';
import { PrincipalPage } from "../pages/modulos/tiendas/principal/principal";
import { PerfilPage } from '../pages/modulos/perfil/perfil';
import { RegistroUsuarioPage } from "../pages/modulos/registro-usuario/registro-usuario";

//Login
import { EmailPage } from "../pages/Login/email/email";
import { RegistroPage } from '../pages/Login/registro/registro'
import { RedesSocialesPage } from "../pages/Login/redes-sociales/redes-sociales";
import { RecordarContrasenaPage } from "../pages/Login/recordar-contrasena/recordar-contrasena";

//Post
import { NormalPage } from "../pages/modulos/inicio/post/normal/normal";


//clases
import { Login } from '../Clases/Login/Login.cs'
import { Usuarios } from '../Clases/Modulos/Usuarios/usuarios.cs'
import { Normal } from "../Clases/Modulos/Posts/Normal.cs";

//Components
import { MapaComponent } from "../Components/Mapa/Mapa.component";
import { EncabezadoComponent } from "../components/encabezado/encabezado";
import { UsuariosOnlineComponent } from "../Components/UsuariosOnline/UsuariosOnline.component";

//Directivas
import { ElasticHeaderDirective } from "../directives/elastic-header/elastic-header";

import { Geolocation } from '@ionic-native/geolocation';
import { FacebookProvider } from '../providers/facebook/facebook';
import { Gyroscope } from '@ionic-native/gyroscope';

import { GoogleProvider } from '../providers/google/google';
import { CerrarSesionProvider } from '../providers/cerrar-sesion/cerrar-sesion';
import { CrearUsuarioProvider } from '../providers/crear-usuario/crear-usuario';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { LoginProvider } from '../providers/login/login';
import { SubirFotosProvider } from '../providers/subir-fotos/subir-fotos';


@NgModule({
  declarations: [
    MyApp,
    EmailPage,
    RedesSocialesPage,
    RegistroPage,
    RecordarContrasenaPage,
    TabsPage,
    RegistroUsuarioPage,
    InicioPage,
    NormalPage,
    RutasPage,
    NotificacionesPage,
    MapaComponent,
    EncabezadoComponent,
    PerfilPage,
    PrincipalPage,
    MensajesPage,
    UsuariosOnlineComponent,
    ElasticHeaderDirective

  ],
  imports: [

    BrowserModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        android: {
          tabsPlacement: 'top',
          pageTransition: 'md-transition'
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
    RegistroUsuarioPage,
    InicioPage,
    NormalPage,
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
    Usuarios,
    Normal,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GoogleMaps,
    Geolocation,
    Facebook,
    GooglePlus,
    Keyboard,
    FacebookProvider,
    GoogleProvider,
    CerrarSesionProvider,
    CrearUsuarioProvider,
    LoginProvider,
    Gyroscope,
    Camera,
    ImagePicker,
    SubirFotosProvider
  ]
})
export class AppModule { }
