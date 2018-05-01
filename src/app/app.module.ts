import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Keyboard } from "@ionic-native/keyboard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { MotosPage } from "../pages/modulos/perfil/opciones/motos/motos";
import { CrearMotoPage } from "../pages/modulos/perfil/opciones/motos/crear-moto/crear-moto";
import { MiInformacionPage } from "../pages/modulos/perfil/opciones/mi-informacion/mi-informacion";
import { MisRutasPage } from "../pages/modulos/perfil/opciones/mis-rutas/mis-rutas";
import { RoboPage } from "../pages/modulos/inicio/post/robo/robo";

//Login
import { EmailPage } from "../pages/Login/email/email";
import { RegistroPage } from '../pages/Login/registro/registro'
import { RedesSocialesPage } from "../pages/Login/redes-sociales/redes-sociales";
import { RecordarContrasenaPage } from "../pages/Login/recordar-contrasena/recordar-contrasena";

//Post
import { NormalPage } from "../pages/modulos/inicio/post/normal/normal";
import { EmergenciaPage } from "../pages/modulos/inicio/post/emergencia/emergencia";
import { TiendaPage } from "../pages/modulos/inicio/post/tienda/tienda";

//clases
import { Login } from '../Clases/Login/Login.cs'
import { Usuarios } from '../Clases/Modulos/Usuarios/usuarios.cs'
import { Normal } from "../Clases/Modulos/Posts/Normal.cs";
import { Tienda } from "../Clases/Modulos/Posts/Tienda.cs";

//Components
import { MapaComponent } from "../Components/Mapa/Mapa.component";
import { EncabezadoComponent } from "../components/encabezado/encabezado";
import { UsuariosOnlineComponent } from "../Components/UsuariosOnline/UsuariosOnline.component";

//Directivas
import { ElasticHeaderDirective } from "../directives/elastic-header/elastic-header";

import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from "@ionic-native/native-geocoder";
import { SMS } from "@ionic-native/sms";
import { FacebookProvider } from '../providers/facebook/facebook';
import { Gyroscope } from '@ionic-native/gyroscope';

import { GeoCoderProvider } from '../providers/googleMaps-GeoCoder/GeoCoder';
import { GoogleProvider } from '../providers/google/google';
import { CerrarSesionProvider } from '../providers/cerrar-sesion/cerrar-sesion';
import { CrearUsuarioProvider } from '../providers/crear-usuario/crear-usuario';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { LoginProvider } from '../providers/login/login';
import { SubirFotosProvider } from '../providers/subir-fotos/subir-fotos';
import { FotoGaleriaProvider } from '../providers/foto-galeria/foto-galeria';
import { OneSignal } from '@ionic-native/onesignal';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';



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
    EmergenciaPage,
    TiendaPage,
    RutasPage,
    NotificacionesPage,
    MapaComponent,
    EncabezadoComponent,
    PerfilPage,
    PrincipalPage,
    MensajesPage,
    UsuariosOnlineComponent,
    ElasticHeaderDirective,
    MotosPage,
    CrearMotoPage,
    MiInformacionPage,
    MisRutasPage,
    RoboPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    EmergenciaPage,
    TiendaPage,
    RutasPage,
    NotificacionesPage,
    MapaComponent,
    EncabezadoComponent,
    PerfilPage,
    PrincipalPage,
    MensajesPage,
    UsuariosOnlineComponent,
    MotosPage,
    CrearMotoPage,
    MiInformacionPage,
    MisRutasPage,
    RoboPage
  ],
  providers: [
    StatusBar,
    Login,
    Usuarios,
    Normal,
    Tienda,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GoogleMaps,
    Geolocation,
    SMS,
    Facebook,
    GooglePlus,
    Keyboard,
    FacebookProvider,
    GoogleProvider,
    NativeGeocoder,
    CerrarSesionProvider,
    CrearUsuarioProvider,
    LoginProvider,
    GeoCoderProvider,
    Gyroscope,
    Camera,
    ImagePicker,
    SubirFotosProvider,
    FotoGaleriaProvider,
    OneSignal,
    PushnotificationProvider
  ]
})
export class AppModule { }
