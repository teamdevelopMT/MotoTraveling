webpackJsonp([20],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Clases_Login_Login_cs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_email__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//paginas

var RegistroPage = (function () {
    function RegistroPage(navCtrl, navParams, fb, login, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.login = login;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.usuario = {};
        this.emailPage = __WEBPACK_IMPORTED_MODULE_4__email_email__["a" /* EmailPage */];
        this.formulario = this.fb.group({
            correo: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            contrasena: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z0-9]{6,18}$/)]]
        });
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.RegistrarUsuario = function () {
        var _this = this;
        var creandoUsuario = this.loadingCtrl.create({
            content: "Espera por favor, estamos creando tu cuenta"
        });
        creandoUsuario.present();
        this.usuario.correo = this.formulario.get('correo').value;
        this.usuario.contrasena = this.formulario.get('contrasena').value;
        this.login.RegistrarUsuario(this.usuario).then(function (res) {
            creandoUsuario.dismiss();
        }).catch(function (err) {
            creandoUsuario.dismiss();
            _this.alertCtrl.create({
                title: "Algo salio mal",
                subTitle: "El correo ingresado ya se encuentra registrado",
                buttons: ["Aceptar"]
            }).present();
        });
        ;
    };
    return RegistroPage;
}());
RegistroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registro',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\Login\registro\registro.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  \n\n      <ion-title>Crea tu cuenta</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button clear [navPush]="emailPage" color="moto">\n\n          Iniciar sesión\n\n        </button>\n\n      </ion-buttons>\n\n  \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Has parte de la comunidad</h2>\n\n  <form [formGroup]="formulario" (ngSubmit)="RegistrarUsuario()">\n\n    <ion-list>\n\n      <ion-item *ngIf="formulario.get(\'correo\').errors && formulario.get(\'correo\').dirty">\n\n        <p color="danger" ion-text *ngIf="formulario.get(\'correo\').hasError(\'required\')">Ingresa un correo electronico para continuar</p>\n\n        <p color="danger" ion-text *ngIf="formulario.get(\'correo\').hasError(\'email\')">Ingresa un correo valido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="mail"></ion-icon>\n\n        <ion-label floating>Correo electronico</ion-label>\n\n        <ion-input formControlName="correo" type="text" value=""></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="lock"></ion-icon>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input formControlName="contrasena" type="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="formulario.get(\'contrasena\').errors && formulario.get(\'contrasena\').dirty">\n\n        <p color="danger" ion-text *ngIf="formulario.get(\'contrasena\').hasError(\'required\')">Ingresa una contraseña para continuar</p>\n\n        <p color="danger" ion-text *ngIf="formulario.get(\'contrasena\').hasError(\'pattern\')">Ingresa mínimo 6 caracteres</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <button ion-button full type="submit" [disabled]="formulario.invalid">Crear cuenta</button>\n\n    </div>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\Login\registro\registro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__Clases_Login_Login_cs__["a" /* Login */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], RegistroPage);

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedesSocialesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Clases_Login_Login_cs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RedesSocialesPage = (function () {
    function RedesSocialesPage(navCtrl, navParams, login, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = login;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.registroPage = __WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */];
    }
    RedesSocialesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RedesSocialesPage');
    };
    RedesSocialesPage.prototype.IniciarSesionFacebook = function () {
        var _this = this;
        var cargando = this.loadingCtrl.create({
            content: "Iniciando sesión con facebook"
        });
        cargando.present();
        this.login.IniciarSesionFacebook().then(function (res) {
            cargando.dismiss();
        }).catch(function (err) {
            console.log(err);
            if (err.code == 'auth/account-exists-with-different-credential') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Algo paso!',
                    subTitle: 'Ya has creado una cuenta con el correo que intentas registrar con Facebook!',
                    buttons: ['Aceptar']
                });
                alert_1.present();
            }
            cargando.dismiss();
        });
    };
    RedesSocialesPage.prototype.IniciarSesionGoogle = function () {
        var _this = this;
        var cargando = this.loadingCtrl.create({
            content: "Iniciando sesión con google"
        });
        cargando.present();
        this.login.IniciarSesionGoogle().then(function (res) {
            cargando.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (err) {
            cargando.dismiss();
            console.error("erorrrrr" + err);
        });
    };
    return RedesSocialesPage;
}());
RedesSocialesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-redes-sociales',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\Login\redes-sociales\redes-sociales.html"*/'<ion-content>\n\n    <div class="fondo">\n\n        <div id="titulo" text-center>\n\n            <h2>Moto Traveling</h2>\n\n        </div>\n\n        <div id="botones" text-center>\n\n            <h3>Inicia una nueva aventura</h3>\n\n            <button ion-button icon-only outline color="moto" (click)="IniciarSesionFacebook()">\n\n        <ion-icon name="logo-facebook"></ion-icon>\n\n      </button>\n\n\n\n            <button ion-button icon-only outline color="moto" (click)="IniciarSesionGoogle()">\n\n        <ion-icon name="logo-google"></ion-icon>\n\n      </button>\n\n\n\n            <button ion-button icon-only outline color="moto" [navPush]="registroPage">\n\n        <ion-icon name="mail"></ion-icon>\n\n      </button>\n\n\n\n            <div class="line">\n\n                <div></div>\n\n                <h4>o</h4>\n\n                <div></div>\n\n            </div>\n\n            <button ion-button clear color="white" [navPush]="registroPage">Regístrate</button>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\Login\redes-sociales\redes-sociales.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__Clases_Login_Login_cs__["a" /* Login */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], RedesSocialesPage);

//# sourceMappingURL=redes-sociales.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_subir_fotos_subir_fotos__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Posts_Tienda_cs__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TiendaPage = (function () {
    function TiendaPage(viewCtrl, camera, imagePicker, storage, toastCtrl, subirFotoService, tienda) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.subirFotoService = subirFotoService;
        this.tienda = tienda;
        this.imgPreview = '';
        this.foto = '';
        this.decripcion = '';
        this.valor = null;
        this.numeroContacto = null;
        this.storage.get('nombreUsuario').then(function (res) {
            _this.idusuario = res;
        });
    }
    TiendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NormalPage');
    };
    TiendaPage.prototype.cerrar = function () {
        this.viewCtrl.dismiss();
    };
    TiendaPage.prototype.keyup = function (e) {
        e.style.height = (10 + e.scrollHeight) + "px";
    };
    TiendaPage.prototype.Camara = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.imgPreview = 'data:image/jpeg;base64,' + imageData;
            _this.foto = imageData;
        }, function (err) {
            // this.mostrar_mensaje("no se puede mostrar la camara en el navegador");
            console.log("error");
        });
    };
    TiendaPage.prototype.Galeria = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.imgPreview = 'data:image/jpeg;base64,' + imageData;
            _this.foto = imageData;
        }, function (err) {
            // this.mostrar_mensaje("no se puede mostrar la camara en el navegador");
            console.log("error");
        });
    };
    TiendaPage.prototype.SubirPost = function () {
        var _this = this;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = dd + '/' + mm + '/' + yyyy;
        var hora = new Date();
        hora = hora.getHours() + ":" + hora.getMinutes();
        var archivo = {
            descripcion: this.decripcion,
            fecha: today,
            hora: hora,
            idUsuario: this.idusuario,
            foto: "",
            valor: this.valor,
            numeroContacto: this.numeroContacto
        };
        this.subirFotoService.SubirFotosFirebase('Post/Tienda', this.foto).then(function (res) {
            archivo.foto = res.toString();
            _this.tienda.SubirPost(archivo).then(function (res) {
                _this.mostrarToast("Clasificado realizado correctamente");
                _this.cerrar();
            });
        });
    };
    TiendaPage.prototype.mostrarToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    return TiendaPage;
}());
TiendaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tienda',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\inicio\post\tienda\tienda.html"*/'<ion-header>\n\n  <ion-toolbar color="secondary">\n\n    <ion-title>Publica tu clasificado</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="cerrar()">\n\n        <ion-icon name="ios-close-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="post-container">\n\n  </div>\n\n  <div class="post">\n\n    <div>\n\n      <img [src]="imgPreview" *ngIf="imgPreview != null" />\n\n    </div>\n\n    <div padding id="divIngresoDatos">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-textarea [(ngModel)]="decripcion" placeholder="Escribe aquí una descripción">\n\n                  </ion-textarea>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="number" [(ngModel)]="valor" placeholder="Valor"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-input type="number" [(ngModel)]="numeroContacto" placeholder="Numero de contacto"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n  </div>\n\n  <div>\n\n    <ion-card>\n\n      <ion-list>\n\n        <button ion-item (click)="Camara()">\n\n          <ion-icon name="ios-camera-outline" item-start color="secondary"></ion-icon>\n\n          Toma una foto\n\n        </button>\n\n        <button ion-item (click)="Galeria()">\n\n          <ion-icon name="ios-images" item-start color="secondary"></ion-icon>\n\n          Sube una imagen\n\n        </button>\n\n      </ion-list>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <button ion-button full color="secondary" (click)="SubirPost()" [disabled]="decripcion.length == 0 || valor == null || valor == 0 || numeroContacto == null || numeroContacto == 0">Publicar</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\inicio\post\tienda\tienda.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_subir_fotos_subir_fotos__["a" /* SubirFotosProvider */],
        __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Posts_Tienda_cs__["a" /* Tienda */]])
], TiendaPage);

//# sourceMappingURL=tienda.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tienda; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Usuarios_usuarios_cs__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tienda = (function () {
    function Tienda(af, usuarios) {
        this.af = af;
        this.usuarios = usuarios;
    }
    Tienda.prototype.SubirPost = function (post) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.af.database.ref('/post/tienda').push(post).then(function (res) {
                resolve();
            });
        });
        return promise;
    };
    Tienda.prototype.ConsultarPost = function () {
        var _this = this;
        var result = this.af.list('post/tienda').valueChanges().map(function (posts) {
            for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                var post = posts_1[_i];
                post["usuario"] = _this.af.object('/usuarios/' + post["idUsuario"]).valueChanges();
            }
            return posts.reverse();
        });
        return result;
    };
    return Tienda;
}());
Tienda = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__Usuarios_usuarios_cs__["a" /* Usuarios */]])
], Tienda);

//# sourceMappingURL=Tienda.cs.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro_registro__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recordar_contrasena_recordar_contrasena__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Clases_Login_Login_cs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Usuarios_usuarios_cs__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//paginas



var EmailPage = (function () {
    function EmailPage(navCtrl, navParams, login, fb, alertCtrl, loadingCtrl, usuarios) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = login;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.usuarios = usuarios;
        this.usuario = {};
        this.recordarContrasenaPage = __WEBPACK_IMPORTED_MODULE_4__recordar_contrasena_recordar_contrasena__["a" /* RecordarContrasenaPage */];
        this.registroPage = __WEBPACK_IMPORTED_MODULE_2__registro_registro__["a" /* RegistroPage */];
        this.formulario = this.fb.group({
            correo: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            contrasena: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]]
        });
    }
    EmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailPage');
    };
    EmailPage.prototype.IniciarSesion = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Iniciando sesíon"
        });
        loading.present();
        this.usuario.correo = this.formulario.get('correo').value;
        this.usuario.contrasena = this.formulario.get('contrasena').value;
        this.login.IniciarSesionCorreo(this.usuario).then(function (res) {
            loading.dismiss();
            var idUsuario = _this.usuario.correo.replace(/\@/g, '');
            idUsuario = idUsuario.replace(/\./g, '');
            _this.navParams.data = { "idUsuario": idUsuario, "correo": _this.usuario.correo };
        }).catch(function (err) {
            loading.dismiss();
            console.error("el error:" + err);
            switch (err.code) {
                case "auth/user-not-found":
                    _this.AlertaError("El correo electronico ingresado no se encuentra registrado");
                    break;
                case "auth/wrong-password":
                    _this.AlertaError("Contraseña incorrecta");
                    break;
                default:
                    _this.AlertaError("Correo o contraseña incorrectas");
                    break;
            }
        });
    };
    EmailPage.prototype.AlertaError = function (mensaje) {
        this.alertCtrl.create({
            title: "Error al iniciar",
            subTitle: mensaje,
            buttons: ["Aceptar"]
        }).present();
    };
    return EmailPage;
}());
EmailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-email',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\Login\email\email.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Iniciar sesión</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear color="moto" navPop>\n\n        Registrate\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="formulario" (ngSubmit)="IniciarSesion()">\n\n    <ion-item>\n\n      <ion-icon name="mail"></ion-icon>\n\n      <ion-label floating>Correo electronico</ion-label>\n\n      <ion-input formControlName="correo" id="correo" type="email" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="lock"></ion-icon>\n\n      <ion-label floating>Contraseña</ion-label>\n\n      <ion-input formControlName="contrasena" id="contrasena" type="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <div padding>\n\n      <button ion-button full color="moto" type="submit" [disabled]="formulario.invalid"> ¡A rodar!</button>\n\n    </div>\n\n\n\n    <div padding>\n\n      <button ion-button full [navPush]="recordarContrasenaPage"> Olvidaste tu contraseña</button>\n\n    </div>\n\n\n\n  </form>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\Login\email\email.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__Clases_Login_Login_cs__["a" /* Login */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Usuarios_usuarios_cs__["a" /* Usuarios */]])
], EmailPage);

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordarContrasenaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Clases_Login_Login_cs__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecordarContrasenaPage = (function () {
    function RecordarContrasenaPage(navCtrl, navParams, login, alertCtrl, loadingCtrl, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = login;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.formulario = this.fb.group({
            correo: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]]
        });
    }
    RecordarContrasenaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecordarContrasenaPage');
    };
    RecordarContrasenaPage.prototype.RecordarContrasena = function () {
        var _this = this;
        var enviando = this.loadingCtrl.create({
            content: "Enviando correo"
        });
        enviando.present();
        this.login.RecordarContrasena(this.formulario.get('correo').value).then(function (res) {
            enviando.dismiss();
            _this.alertCtrl.create({
                title: "Recordar contraseña",
                subTitle: "Te enviamos un correo para que puedas restablecer tu contraseña",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        handler: function () {
                            _this.navCtrl.pop();
                        }
                    }]
            }).present();
        }).catch(function (err) {
            enviando.dismiss();
            _this.alertCtrl.create({
                title: "¡Ups!",
                subTitle: "Al parecer tu correo no se encuentra registrado, registrate para continuar",
                buttons: ["Aceptar"]
            }).present();
        });
    };
    return RecordarContrasenaPage;
}());
RecordarContrasenaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recordar-contrasena',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\Login\recordar-contrasena\recordar-contrasena.html"*/'<!--\n\n  Generated template for the RecordarContrasenaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Recordar contraseña</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="formulario" (ngSubmit)="RecordarContrasena()">\n\n    <ion-list>\n\n      <ion-item *ngIf="formulario.get(\'correo\').errors && formulario.get(\'correo\').dirty">\n\n        <p color="danger" ion-text *ngIf="formulario.get(\'correo\').hasError(\'required\')">Ingresa un correo electronico para continuar</p>\n\n        <p color="danger" ion-text *ngIf="formulario.get(\'correo\').hasError(\'email\')">Ingresa un correo valido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Ingresa tu correo</ion-label>\n\n        <ion-input formControlName="correo" type="email"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n\n      <button ion-button full type="submit" [disabled]="formulario.invalid"> Envíame un correo</button>\n\n    </div>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\Login\recordar-contrasena\recordar-contrasena.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__Clases_Login_Login_cs__["a" /* Login */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], RecordarContrasenaPage);

//# sourceMappingURL=recordar-contrasena.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_post_normal_normal__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_post_emergencia_emergencia__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_post_tienda_tienda__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_post_robo_robo__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Posts_Normal_cs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_animations__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Clases_Modulos_Usuarios_usuarios_cs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var InicioPage = (function () {
    function InicioPage(navCtrl, navParams, platfrom, modalCtrl, normal, storage, usuarios) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platfrom = platfrom;
        this.modalCtrl = modalCtrl;
        this.normal = normal;
        this.storage = storage;
        this.usuarios = usuarios;
        this.data = {};
        this.seccion = 'noticias';
        this.posts = this.normal.ConsultarPost();
        this.storage.get('nombreUsuario').then(function (res) {
            _this.usuarios.ConsultarUsuario(res).then(function (usu) {
                if (usu["foto"] == '')
                    usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
                _this.data = usu;
            });
        });
    }
    InicioPage.prototype.PostNormal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__inicio_post_normal_normal__["a" /* NormalPage */]);
        modal.present();
    };
    InicioPage.prototype.PostEmergencia = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__inicio_post_emergencia_emergencia__["a" /* EmergenciaPage */], this.data);
        modal.present();
    };
    InicioPage.prototype.PostTienda = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__inicio_post_tienda_tienda__["a" /* TiendaPage */]);
        modal.present();
    };
    InicioPage.prototype.PostRobo = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__inicio_post_robo_robo__["a" /* RoboPage */]);
        modal.present();
    };
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\inicio\inicio.html"*/'<ion-content>\n\n    <div padding>\n\n        <ion-segment [(ngModel)]="seccion">\n\n            <ion-segment-button value="noticias">\n\n                Noticias\n\n            </ion-segment-button>\n\n            <ion-segment-button value="publicaciones">\n\n                Publicaciones\n\n            </ion-segment-button>\n\n\n\n        </ion-segment>\n\n    </div>\n\n    <div class="post">\n\n        <div [ngSwitch]="seccion">\n\n            <div *ngSwitchCase="\'publicaciones\'">\n\n                <ion-card *ngFor="let post of posts | async" [@itemState]="in">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="{{(post.usuario |async)?.foto}}">\n\n                        </ion-avatar>\n\n                        <h2>{{(post.usuario | async)?.nombre}}</h2>\n\n                        <p>{{post.fecha}}</p>\n\n                    </ion-item>\n\n                    <img [src]="post.foto">\n\n                    <ion-card-content>\n\n                        <p>{{post.descripcion}}</p>\n\n                    </ion-card-content>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            <button ion-button icon-left clear small>\n\n            <ion-icon name="thumbs-up"></ion-icon>\n\n            <div>0 Likes</div>\n\n          </button>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <button ion-button icon-left clear small>\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>0 Comments</div>\n\n          </button>\n\n                        </ion-col>\n\n\n\n                    </ion-row>\n\n                </ion-card>\n\n\n\n            </div>\n\n            <div *ngSwitchCase="\'noticias\'">\n\n                <ion-card>\n\n                    <img src="./assets/img/noticia.jpg" />\n\n                    <ion-card-content>\n\n                        <ion-card-title>\n\n                            Pre sustentación Moto Traveling\n\n                        </ion-card-title>\n\n                        <p>\n\n                            En este espacio se realizará una pre sustentación de la aplicación que revolucionará la experiencia motera, los invitamos a que nos acompañen\n\n                        </p>\n\n                    </ion-card-content>\n\n\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            <button ion-button icon-left clear small color="moto">\n\n                                            <ion-icon name="pin"></ion-icon>\n\n                                            <div>Universidad Inpahu</div>\n\n                                          </button>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <button ion-button icon-left clear small color="asphalt">\n\n                                            <ion-icon name="calendar"></ion-icon>\n\n                                            <div>11/05/2018</div>\n\n                                          </button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <ion-fab bottom right *ngIf="seccion == \'publicaciones\'">\n\n        <button ion-fab color="dark">\n\n<ion-icon name="add" color="moto"></ion-icon>\n\n</button>\n\n\n\n        <ion-fab-list side="top">\n\n            <button ion-fab color="primary" (click)="PostNormal()">\n\n<ion-icon name="ios-paper"></ion-icon>\n\n</button>\n\n            <button ion-fab color="secondary" (click)="PostTienda()">\n\n<ion-icon name="ios-pricetag"></ion-icon>\n\n</button>\n\n            <button ion-fab color="moto" (click)="PostEmergencia()">\n\n<ion-icon name="ios-pulse"></ion-icon>\n\n</button>\n\n            <button ion-fab color="danger" (click)="PostRobo()">\n\n<ion-icon name="ios-nuclear"></ion-icon>\n\n</button>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\inicio\inicio.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["j" /* trigger */])('itemState', [
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })),
                //Enter
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* style */])({
                        transform: 'translateX(-100%)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('300ms linear')
                ]),
                //Leave
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* style */])({
                    transform: 'translateX(100%)'
                }))),
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Posts_Normal_cs__["a" /* Normal */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__Clases_Modulos_Usuarios_usuarios_cs__["a" /* Usuarios */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_subir_fotos_subir_fotos__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Posts_Normal_cs__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NormalPage = (function () {
    function NormalPage(viewCtrl, camera, imagePicker, storage, subirFotoService, normal) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.storage = storage;
        this.subirFotoService = subirFotoService;
        this.normal = normal;
        this.imgPreview = '';
        this.foto = '';
        this.decripcion = '';
        this.storage.get('nombreUsuario').then(function (res) {
            _this.idusuario = res;
        });
    }
    NormalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NormalPage');
    };
    NormalPage.prototype.cerrar = function () {
        this.viewCtrl.dismiss();
    };
    NormalPage.prototype.keyup = function (e) {
        e.style.height = (10 + e.scrollHeight) + "px";
    };
    NormalPage.prototype.Camara = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.imgPreview = 'data:image/jpeg;base64,' + imageData;
            _this.foto = imageData;
        }, function (err) {
            // this.mostrar_mensaje("no se puede mostrar la camara en el navegador");
            console.log("error");
        });
    };
    NormalPage.prototype.Galeria = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.imgPreview = 'data:image/jpeg;base64,' + imageData;
            _this.foto = imageData;
        }, function (err) {
            // this.mostrar_mensaje("no se puede mostrar la camara en el navegador");
            console.log("error");
        });
    };
    NormalPage.prototype.SubirPost = function () {
        var _this = this;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = dd + '/' + mm + '/' + yyyy;
        var hora = new Date();
        hora = hora.getHours() + ":" + hora.getMinutes();
        var archivo = {
            descripcion: this.decripcion,
            fecha: today,
            hora: hora,
            idUsuario: this.idusuario,
            foto: ""
        };
        this.subirFotoService.SubirFotosFirebase('Post/Normal', this.foto).then(function (res) {
            archivo.foto = res.toString();
            _this.normal.SubirPost(archivo).then(function (res) {
                _this.cerrar();
            });
        });
    };
    return NormalPage;
}());
NormalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-normal',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\inicio\post\normal\normal.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>Cuéntanos algo</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="cerrar()">\n\n        <ion-icon name="ios-close-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="post-container">\n\n  </div>\n\n  <div class="post">\n\n    <div>\n\n      <img [src]="imgPreview" *ngIf="imgPreview != null" />\n\n    </div>\n\n    <div padding>\n\n      <ion-textarea [(ngModel)]="decripcion" placeholder="Escribe aquí">\n\n      </ion-textarea>\n\n    </div>\n\n  </div>\n\n  <div>\n\n    <ion-card>\n\n      <ion-list>\n\n        <button ion-item (click)="Camara()">\n\n          <ion-icon name="ios-camera-outline" item-start color="primary"></ion-icon>\n\n          Toma una foto\n\n        </button>\n\n        <button ion-item (click)="Galeria()">\n\n          <ion-icon name="ios-images" item-start color="primary"></ion-icon>\n\n          Sube una imagen\n\n        </button>\n\n      </ion-list>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <button ion-button full (click)="SubirPost()" [disabled]="decripcion.length == 0">Publicar</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\inicio\post\normal\normal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_subir_fotos_subir_fotos__["a" /* SubirFotosProvider */],
        __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Posts_Normal_cs__["a" /* Normal */]])
], NormalPage);

//# sourceMappingURL=normal.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Clases_Modulos_Usuarios_usuarios_cs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sms__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmergenciaPage = (function () {
    function EmergenciaPage(navCtrl, navParams, viewCtrl, storage, usuarios, geolocation, nativeGeocoder, sms) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.usuarios = usuarios;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.sms = sms;
        this.usuario = {};
        this.storage.get("_correo_").then(function (res) {
            _this.idUsuario = res.replace(/\@/g, '');
            _this.idUsuario = _this.idUsuario.replace(/\./g, '');
            _this.usuarios.ConsultarUsuario(_this.idUsuario).then(function (usu) {
                if (usu["foto"] == '')
                    usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
                _this.usuario = usu;
            });
        });
        this.GetGeolocalitation();
    }
    EmergenciaPage.prototype.ionViewDidLoad = function () {
    };
    EmergenciaPage.prototype.GetGeolocalitation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap";
            //Set the Google Map Center.
            staticMapUrl += "?center=" + (resp.coords.latitude) + "," + (resp.coords.longitude);
            //Set the Google Map Size.
            staticMapUrl += "&size=640x400";
            //Set the Google Map Zoom.
            staticMapUrl += "&zoom=" + 18;
            //Set the Google Map Type.
            staticMapUrl += "&maptype=" + "roadmap";
            staticMapUrl += "&markers=icon:red|" + resp.coords.latitude + "," + resp.coords.longitude + "|";
            _this.mapa = staticMapUrl;
            _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                .then(function (result) {
                _this.nombreCIudad = result[0]['countryName'] + ' ' + result[0]['locality'] + ' ' + result[0]['subLocality'];
                _this.direccion = result[0]['thoroughfare'] + ' # ' + result[0]['subThoroughfare'];
            })
                .catch(function (error) { return console.log(error); });
            _this.latitud = resp.coords.latitude;
            _this.logitud = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    EmergenciaPage.prototype.cerrar = function () {
        this.viewCtrl.dismiss();
    };
    EmergenciaPage.prototype.Hora = function () {
        var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
        var segundo = fecha.getSeconds();
        if (hora < 10) {
            hora = "0" + hora;
        }
        if (minuto < 10) {
            minuto = "0" + minuto;
        }
        if (segundo < 10) {
            segundo = "0" + segundo;
        }
        var horita = hora + ":" + minuto + ":" + segundo;
        return horita;
    };
    EmergenciaPage.prototype.PedirAyuda = function () {
        this.sms.send('3508777293', 'Hola acabo de tener accidente necesito de tu ayuda, te envio la ubicacion donde me encuentro: https://www.google.com/maps/dir/?api=1&destination=' + this.latitud + ',' + this.logitud);
    };
    return EmergenciaPage;
}());
EmergenciaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-emergencia',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\inicio\post\emergencia\emergencia.html"*/'<ion-header>\n\n  <ion-navbar color="moto">\n\n    <ion-title> Que emergencia tienes</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="cerrar()">\n\n        <ion-icon name="ios-close-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n\n\n    <img [src]="mapa" alt="">\n\n    <ion-fab right top>\n\n      <button ion-fab color="moto">\n\n        <ion-icon name="ios-map"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n\n\n    <ion-item>\n\n      <ion-icon name="pin" item-start large></ion-icon>\n\n      <h2>{{nombreCIudad}}</h2>\n\n      <p>{{direccion}}</p>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      Tipo de Emergencia\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-label>Llanta Pinchada</ion-label>\n\n      <ion-radio value="1"></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Falla mecánica</ion-label>\n\n      <ion-radio value="2"></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Caída Inesperada</ion-label>\n\n      <ion-radio value="3"></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Colisión</ion-label>\n\n      <ion-radio value="4"></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Olvido de Documentos</ion-label>\n\n      <ion-radio value="5"></ion-radio>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button full color="moto" (click)="PedirAyuda()">Pedir Ayuda</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\inicio\post\emergencia\emergencia.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__Clases_Modulos_Usuarios_usuarios_cs__["a" /* Usuarios */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_sms__["a" /* SMS */]])
], EmergenciaPage);

//# sourceMappingURL=emergencia.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoboPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RoboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoboPage = (function () {
    function RoboPage(viewCtrl, oneSignal, platform, http) {
        this.viewCtrl = viewCtrl;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.http = http;
    }
    RoboPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoboPage');
    };
    RoboPage.prototype.Cerrar = function () {
        this.viewCtrl.dismiss();
    };
    RoboPage.prototype.AlertaRobo = function () {
        var _this = this;
        var body = {
            app_id: '0bc711c8-0f08-4a2b-90c5-bc37812cb9b9',
            template_id: '0cc2e67b-8be9-495d-806d-69e031080348',
            included_segments: ["All"],
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic MTc1ZmU0MmEtNTkxNy00MmY2LWJmNDMtYTdiNDU0MDQyMTRk');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post('https://onesignal.com/api/v1/notifications', body, options).subscribe(function (data) {
            console.log(data);
            _this.viewCtrl.dismiss();
        }, function (error) {
            console.log(error);
        });
    };
    return RoboPage;
}());
RoboPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-robo',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\inicio\post\robo\robo.html"*/'<!--\n  Generated template for the RoboPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="google">\n        <ion-title>Alerta de Robo</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="Cerrar()">\n        <ion-icon name="ios-close-outline"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="btn-containter">\n        <div class="border-btn animated infinite pulse">\n            <div class="btn" (click)="AlertaRobo()">\n                <p>Toca si te ocurrió un\n                    <strong>ROBO</strong>\n                </p>\n            </div>\n        </div>\n\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\inicio\post\robo\robo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], RoboPage);

//# sourceMappingURL=robo.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RutasPage = (function () {
    function RutasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validarMapa = false;
        this.flagLeavePage = false;
    }
    RutasPage.prototype.ionViewDidEnter = function () {
        if (this.flagLeavePage) {
            this.validarMapa = true;
        }
    };
    RutasPage.prototype.ionViewDidLeave = function () {
        this.flagLeavePage = true;
        this.validarMapa = false;
    };
    return RutasPage;
}());
RutasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rutas',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\rutas\rutas.html"*/'<mapa-component [flagValidarMapa]="validarMapa"></mapa-component>'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\rutas\rutas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], RutasPage);

//# sourceMappingURL=rutas.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MensajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MensajesPage = (function () {
    function MensajesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MensajesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MensajesPage');
    };
    return MensajesPage;
}());
MensajesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mensajes',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\mensajes\mensajes.html"*/'\n\n\n\n<ion-content padding>\n\n        <img style="height: 100%; width: 100%;" src="assets/img/web_en_proceso.png"/>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\mensajes\mensajes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MensajesPage);

//# sourceMappingURL=mensajes.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_post_tienda_tienda__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Clases_Modulos_Posts_Normal_cs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Clases_Modulos_Posts_Tienda_cs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Usuarios_usuarios_cs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalPage = (function () {
    function PrincipalPage(navCtrl, navParams, platfrom, modalCtrl, normal, tienda, storage, usuarios) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platfrom = platfrom;
        this.modalCtrl = modalCtrl;
        this.normal = normal;
        this.tienda = tienda;
        this.storage = storage;
        this.usuarios = usuarios;
        this.data = {};
        this.ventas = this.tienda.ConsultarPost();
        this.storage.get('nombreUsuario').then(function (res) {
            _this.usuarios.ConsultarUsuario(res).then(function (usu) {
                if (usu["foto"] == '')
                    usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
                _this.data = usu;
            });
        });
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalPage');
    };
    PrincipalPage.prototype.PostTienda = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__inicio_post_tienda_tienda__["a" /* TiendaPage */]);
        modal.present();
    };
    return PrincipalPage;
}());
PrincipalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-principal',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\tiendas\principal\principal.html"*/'<ion-content>\n\n    <div class="post">\n\n\n\n        <ion-card *ngFor="let post of ventas | async" [@itemState]="in">\n\n            <ion-item>\n\n                <ion-avatar item-start>\n\n                    <img src="{{(post.usuario |async)?.foto}}">\n\n                </ion-avatar>\n\n                <h2>{{(post.usuario | async)?.nombre}}</h2>\n\n                <p>{{post.fecha}}</p>\n\n            </ion-item>\n\n            <img [src]="post.foto">\n\n            <ion-card-content>\n\n                <p>{{post.descripcion}}</p>\n\n            </ion-card-content>\n\n            <ion-card-content>\n\n                <ion-icon ios="ios-call" md="md-call"></ion-icon>\n\n                <label id="lblNumContacto"> : {{post.numeroContacto}}</label>\n\n                <ion-icon ios="ios-cash" md="md-cash"></ion-icon>\n\n                <label> : {{post.valor}} $</label>\n\n            </ion-card-content>\n\n\n\n\n\n        </ion-card>\n\n\n\n    </div>\n\n    <ion-fab bottom right>\n\n        <button ion-fab color="secondary" (click)="PostTienda()">\n\n                <ion-icon name="add" color="white"></ion-icon>\n\n              </button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\tiendas\principal\principal.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('itemState', [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })),
                //Enter
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                        transform: 'translateX(-100%)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('300ms linear')
                ]),
                //Leave
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                    transform: 'translateX(100%)'
                }))),
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__Clases_Modulos_Posts_Normal_cs__["a" /* Normal */],
        __WEBPACK_IMPORTED_MODULE_4__Clases_Modulos_Posts_Tienda_cs__["a" /* Tienda */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Usuarios_usuarios_cs__["a" /* Usuarios */]])
], PrincipalPage);

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Interfaces_rutaUsuarios__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Local storage

//Firebase

/**
 * Generated class for the NotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacionesPage = (function () {
    function NotificacionesPage(navParams, _fireAuth, storage, afDB, alertCtrl, navCtrl, toastCtrl) {
        this.navParams = navParams;
        this._fireAuth = _fireAuth;
        this.storage = storage;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.invitacionesRutaPendientes = new Array();
        this.invitacionesRutaContestadas = new Array();
    }
    NotificacionesPage.prototype.ngOnInit = function () {
        var _this = this;
        /*Subscripcion de invitaciones*/
        this.storage.get('nombreUsuario').then(function (nombreUsuario) {
            _this.nombreUsuarioSession = nombreUsuario;
            var promesa = new Promise(function (resolve, reject) {
                _this.resultadoConsultaFire = _this.afDB.list('invitacionesRuta/' + _this.nombreUsuarioSession).valueChanges();
                var fechaActual = new Date();
                _this.suscripcionResultadoConsultaFire = _this.resultadoConsultaFire.subscribe(function (resp) {
                    _this.invitacionesRutaPendientes = resp.filter(function (filtro) { return filtro.estado == "pendiente"; });
                    _this.invitacionesRutaContestadas = resp.filter(function (filtro) { return filtro.estado != "pendiente"; });
                });
            });
        });
    };
    NotificacionesPage.prototype.ngOnDestroy = function () {
        this.suscripcionResultadoConsultaFire.unsubscribe();
    };
    NotificacionesPage.prototype.mostrarAlertaConfirmacion = function (invitacionRuta) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmacion de ubicacion',
            message: 'Tu amigo ' + invitacionRuta.usuarioInvitacion + ' te acaba de invitar a una ruta. ¿desea aceptar la invitacion?',
            buttons: [
                {
                    text: 'Rechazar',
                    handler: function () {
                        _this.afDB.object('invitacionesRuta/' + _this.nombreUsuarioSession + '/' + _this.nombreUsuarioSession + invitacionRuta.ruta)
                            .update({ estado: "Rechazada" });
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        invitacionRuta.estado = "Aceptada";
                        _this.afDB.object('invitacionesRuta/' + _this.nombreUsuarioSession + '/' + _this.nombreUsuarioSession + invitacionRuta.ruta)
                            .update({ estado: "Aceptada" });
                        _this.rutaUsuario = new __WEBPACK_IMPORTED_MODULE_2__Interfaces_rutaUsuarios__["a" /* rutaUsuarios */]();
                        _this.rutaUsuario.latitud = "0";
                        _this.rutaUsuario.longitud = "0";
                        _this.rutaUsuario.nombre = _this.nombreUsuarioSession;
                        var promesa = new Promise(function (resolve, reject) {
                            _this.afDB.list('rutas/' + invitacionRuta.ruta + '/rutaUsuarios').set(_this.nombreUsuarioSession, _this.rutaUsuario).then(function (res) {
                                _this.mostrarToast('Invitación aceptada correctamente');
                                _this.storage.set("nombreRutaAceptada", invitacionRuta.ruta);
                                _this.navCtrl.parent.select(1, { test: "si" });
                                resolve();
                            }).catch(function (err) {
                                console.error(err);
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    NotificacionesPage.prototype.mostrarToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    return NotificacionesPage;
}());
NotificacionesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notificaciones',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\notificaciones\notificaciones.html"*/'\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item-group>\n\n            <ion-item-divider color="light">Pendientes</ion-item-divider>\n\n            <ion-item *ngFor="let invitacionPendiente of invitacionesRutaPendientes" (click)="mostrarAlertaConfirmacion(invitacionPendiente)">\n\n                <ion-thumbnail item-start>\n\n                    <img src="assets/img/ruta.jpg">\n\n                </ion-thumbnail>\n\n                <h2>{{invitacionPendiente.usuarioInvitacion}}</h2>\n\n                <p>Te ha invitado a unirte a una nueva ruta</p>\n\n            </ion-item>\n\n            <ion-item *ngIf="invitacionesRutaPendientes.length == 0">\n\n                No tienes invitaciones pendientes\n\n            </ion-item>\n\n        </ion-item-group>\n\n        <ion-item-group>\n\n                <ion-item-divider color="light">Respondidas</ion-item-divider>\n\n                <ion-item *ngFor="let invitacionContestadas of invitacionesRutaContestadas">\n\n                    <ion-thumbnail item-start>\n\n                        <img src="assets/img/ruta.jpg">\n\n                    </ion-thumbnail>\n\n                    <h2>{{invitacionContestadas.usuarioInvitacion}}</h2>\n\n                    <p>Te invito a unirte a una nueva ruta , Accion : {{invitacionContestadas.estado}}</p>\n\n                </ion-item>\n\n                <ion-item *ngIf="invitacionesRutaContestadas.length == 0">\n\n                        No tienes invitaciones respondidas\n\n                    </ion-item>\n\n            </ion-item-group>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\notificaciones\notificaciones.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], NotificacionesPage);

//# sourceMappingURL=notificaciones.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Clases_Login_Login_cs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login_redes_sociales_redes_sociales__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Clases_Modulos_Usuarios_usuarios_cs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_opciones_motos_motos__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__perfil_opciones_mi_informacion_mi_informacion__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__perfil_opciones_mis_rutas_mis_rutas__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, loadingCtrl, login, usuarios, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.login = login;
        this.usuarios = usuarios;
        this.storage = storage;
        this.usuario = {};
        this.misMotos = __WEBPACK_IMPORTED_MODULE_6__perfil_opciones_motos_motos__["a" /* MotosPage */];
        this.emergencia = __WEBPACK_IMPORTED_MODULE_7__perfil_opciones_mi_informacion_mi_informacion__["a" /* MiInformacionPage */];
        this.misRutas = __WEBPACK_IMPORTED_MODULE_8__perfil_opciones_mis_rutas_mis_rutas__["a" /* MisRutasPage */];
        this.storage.get('nombreUsuario').then(function (res) {
            _this.usuarios.ConsultarUsuario(res).then(function (usu) {
                if (usu["foto"] == '')
                    usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
                _this.usuario = usu;
            });
        });
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.CerrarSesion = function () {
        var _this = this;
        var cerrar = this.loadingCtrl.create({
            content: "Cerrando sesión"
        });
        cerrar.present();
        this.login.CerrarSesion().then(function (res) {
            cerrar.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__Login_redes_sociales_redes_sociales__["a" /* RedesSocialesPage */]);
        }).catch(function (err) {
            cerrar.dismiss();
            console.error(err);
        });
    };
    PerfilPage.prototype.DatosEmergencia = function () {
        this.navCtrl.push(this.emergencia, this.usuario);
    };
    PerfilPage.prototype.envioMisRutas = function () {
        this.navCtrl.push(this.misRutas, this.usuario);
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\perfil.html"*/'<ion-header>\n\n  <ion-navbar color="moto">\n\n    <ion-title color="asphalt">Perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content elastic-header>\n\n  <div class="fondo-perfil background-image">\n\n    <div class="nombre-perfil">\n\n      <img [src]="usuario.foto" width="100px" height="100px" />\n\n      <h2>{{usuario.nombre}}</h2>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="main-content">\n\n    <ion-card>\n\n      <ion-list>\n\n        <button ion-item (click)="DatosEmergencia()">\n\n          <ion-icon name="ios-pulse" item-start color="moto"></ion-icon>\n\n          Datos de Emergencia\n\n        </button>\n\n\n\n        <button ion-item [navPush]="misMotos">\n\n          <ion-icon name="ios-speedometer-outline" item-start color="moto"></ion-icon>\n\n          Garaje\n\n        </button>\n\n\n\n        <button ion-item>\n\n          <ion-icon name="ios-people-outline" item-start color="moto"></ion-icon>\n\n          Amigos\n\n        </button>\n\n\n\n        <button ion-item (click)="envioMisRutas()">\n\n          <ion-icon name="ios-map-outline" item-start color="moto"></ion-icon>\n\n          Rutas\n\n        </button>\n\n\n\n\n\n        <button ion-item (click)="CerrarSesion()">\n\n          <ion-icon name="ios-log-out" color="moto" item-start></ion-icon>\n\n          Cerrar sesión\n\n        </button>\n\n      </ion-list>\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__Clases_Login_Login_cs__["a" /* Login */],
        __WEBPACK_IMPORTED_MODULE_4__Clases_Modulos_Usuarios_usuarios_cs__["a" /* Usuarios */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opciones_motos_crear_moto_crear_moto__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MotosPage = (function () {
    function MotosPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.pageCrearMoto = __WEBPACK_IMPORTED_MODULE_2__opciones_motos_crear_moto_crear_moto__["a" /* CrearMotoPage */];
    }
    MotosPage.prototype.ionViewDidLoad = function () {
        if (this.navParams.get('crearMoto') != undefined && this.navParams.get('crearMoto') != null) {
            this.CargarToast();
        }
    };
    MotosPage.prototype.CargarToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Se creo tu moto de manera correcta',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    return MotosPage;
}());
MotosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-motos',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\opciones\motos\motos.html"*/'<!--\n\n  Generated template for the MotosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="moto">\n\n    <ion-title>\n\n      <ion-icon name="ios-speedometer-outline" color="white" style="padding-right:2px;"></ion-icon>\n\n      Tus motos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n\n    <img src="./assets/img/moto-crear.jpg" />\n\n    <div class="card-title">Aun no tienes motos</div>\n\n  </ion-card>\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="moto" [navPush]="pageCrearMoto">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\opciones\motos\motos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], MotosPage);

//# sourceMappingURL=motos.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearMotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_foto_galeria_foto_galeria__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_subir_fotos_subir_fotos__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CrearMotoPage = (function () {
    function CrearMotoPage(navCtrl, navParams, viewCtrl, actionSheetCtrl, serviceFotoGaleriaProvider, af, fb, storage, subirFotoService, loadingCtrl, toasCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.serviceFotoGaleriaProvider = serviceFotoGaleriaProvider;
        this.af = af;
        this.fb = fb;
        this.storage = storage;
        this.subirFotoService = subirFotoService;
        this.loadingCtrl = loadingCtrl;
        this.toasCtrl = toasCtrl;
        this.previewMoto = "./assets/img/img-moto-default.jpg";
        this.date = new Date();
        this.yearMin = this.GetYearMin();
        this.yearMaxS = this.GetYearMax('s');
        this.yearMaxT = this.GetYearMax('t');
        this.formulario = this.fb.group({
            nombreMoto: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            marca: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            modelo: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            placas: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            kilometraje: ['', []],
            soat: ['', []],
            TecnoMacanica: ['', []],
            mantenimiento: ['', []],
            cambioAceite: ['', []]
        });
        this.storage.get("_correo_").then(function (res) {
            _this.idUsuario = res.replace(/\@/g, '');
            _this.idUsuario = _this.idUsuario.replace(/\./g, '');
        });
    }
    CrearMotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearMotoPage');
    };
    CrearMotoPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Agrega una foto de tu moto',
            buttons: [
                {
                    text: 'Foto',
                    icon: 'ios-camera',
                    handler: function () {
                        _this.serviceFotoGaleriaProvider.Camara().then(function (res) {
                            _this.previewMoto = _this.serviceFotoGaleriaProvider.info.imgPrevie;
                            _this.motoFoto = _this.serviceFotoGaleriaProvider.info.foto;
                        });
                    }
                }, {
                    text: 'Galeria',
                    icon: 'ios-images',
                    handler: function () {
                        _this.serviceFotoGaleriaProvider.Galeria().then(function (res) {
                            _this.previewMoto = _this.serviceFotoGaleriaProvider.info.imgPrevie;
                            _this.motoFoto = _this.serviceFotoGaleriaProvider.info.foto;
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CrearMotoPage.prototype.GetYearMin = function () {
        return this.date.getFullYear();
    };
    CrearMotoPage.prototype.GetYearMax = function (tipo) {
        switch (tipo) {
            case 's':
                return this.date.getFullYear() + 1;
            case 't':
                return this.date.getFullYear() + 5;
        }
    };
    CrearMotoPage.prototype.CrearMoto = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Estamos guardando tu moto'
        });
        loading.present();
        this.moto = {
            nombreMoto: this.formulario.get('nombreMoto').value,
            marca: this.formulario.get('marca').value,
            modelo: this.formulario.get('modelo').value,
            placas: this.formulario.get('placas').value,
            kilometraje: this.formulario.get('kilometraje').value,
            FechaSoat: this.formulario.get('soat').value,
            fechaTecnomecanica: this.formulario.get('TecnoMacanica').value,
            fechaUltimoMantimiento: this.formulario.get('mantenimiento').value,
            cambioAceite: this.formulario.get('cambioAceite').value
        };
        if (this.motoFoto != undefined && this.motoFoto != null) {
            this.subirFotoService.SubirFotosFirebase('Motos', this.motoFoto).then(function (res) {
                _this.moto.fotoMoto = res.toString();
                _this.af.database.ref().child('/usuarios/' + _this.idUsuario + '/motos').push(_this.moto).then(function (res) {
                    loading.dismiss();
                    _this.CrearToast();
                    _this.navCtrl.pop();
                });
            });
        }
        else {
            this.af.database.ref('/usuarios/' + this.idUsuario + '/motos').push(this.moto).then(function (res) {
                loading.dismiss();
                _this.CrearToast();
                _this.navCtrl.pop();
            });
        }
    };
    CrearMotoPage.prototype.CrearToast = function () {
        var toast = this.toasCtrl.create({
            message: 'Tu moto ha sido creada correctamente',
            duration: 4000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    return CrearMotoPage;
}());
CrearMotoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-crear-moto',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\opciones\motos\crear-moto\crear-moto.html"*/'<ion-header>\n  <ion-navbar color="moto">\n    <ion-title>Nueva Moto</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-content class="foto-moto" [style.backgroundImage]="\'url(\'+previewMoto +\')\'">\n      <div class="text">\n        <button ion-button color="white" clear class="all-screen" (click)="presentActionSheet()">Subir foto/ Tomar foto </button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <div padding>\n    <form [formGroup]="formulario">\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Nombre de tu moto</ion-label>\n          <ion-input formControlName="nombreMoto" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="formulario.get(\'nombreMoto\').errors && formulario.get(\'nombreMoto\').dirty">\n          <p color="danger" ion-text *ngIf="formulario.get(\'nombreMoto\').hasError(\'required\')">Ingresa un nombre para tu moto</p>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Marca</ion-label>\n          <ion-input formControlName="marca" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Referencia</ion-label>\n          <ion-input formControlName="modelo" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Placas</ion-label>\n          <ion-input formControlName="placas" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Kilometraje</ion-label>\n          <ion-input formControlName="kilometraje" type="number"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>SOAT</ion-label>\n          <ion-datetime formControlName="soat" displayFormat="MM/DD/YYYY" [min]="yearMin" [max]="yearMaxS"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Tecno mecánica</ion-label>\n          <ion-datetime formControlName="TecnoMacanica" displayFormat="MM/DD/YYYY" [min]="yearMin" [max]="yearMaxT"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Ultimo Mantenimiento</ion-label>\n          <ion-datetime formControlName="mantenimiento" displayFormat="MM/DD/YYYY" [min]="yearMin" [max]="yearMaxT"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Ultimo Cambio de Aceite (KM)</ion-label>\n          <ion-input formControlName="cambioAceite" type="number"></ion-input>\n        </ion-item>\n      </ion-list>\n    </form>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button full color="moto" [disabled]="formulario.invalid" (click)="CrearMoto()">Agregar</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\opciones\motos\crear-moto\crear-moto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_foto_galeria_foto_galeria__["a" /* FotoGaleriaProvider */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_subir_fotos_subir_fotos__["a" /* SubirFotosProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], CrearMotoPage);

//# sourceMappingURL=crear-moto.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiInformacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crear_usuario_crear_usuario__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiInformacionPage = (function () {
    function MiInformacionPage(navCtrl, navParams, UsuarioService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UsuarioService = UsuarioService;
        this.modalCtrl = modalCtrl;
        this.eps = "";
        this.tipoSangre = "";
        this.documento = "";
        this.usuario = this.navParams.data;
        this.UsuarioService.ConsultarInfoSalud(this.usuario.idUsuario).then(function (res) {
            if (res) {
                _this.eps = res["EPS"];
                _this.tipoSangre = res["TipoSangre"];
                _this.documento = res["Documento"];
            }
        });
    }
    MiInformacionPage.prototype.ionViewDidLoad = function () {
    };
    MiInformacionPage.prototype.GuardarData = function () {
        var infoSalud = {
            EPS: this.eps,
            TipoSangre: this.tipoSangre,
            Documento: this.documento
        };
        this.UsuarioService.InsertarInfoSalud(this.usuario.idUsuario, infoSalud);
    };
    MiInformacionPage.prototype.AgregarOpcion = function (tipo) {
        var modal = this.modalCtrl.create("AgregarOpcionesPage", { 'tipodatoEmergencia': tipo });
        modal.present();
    };
    return MiInformacionPage;
}());
MiInformacionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mi-informacion',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\opciones\mi-informacion\mi-informacion.html"*/'<ion-header>\n    <ion-navbar color="moto">\n        <ion-title>\n            <ion-icon name="ios-pulse-outline" color="white" style="padding-right:5px;"></ion-icon>En caso de Emergencia</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content style="padding:5px">\n    <ion-card>\n        <ion-card-header>\n            <strong>Datos Salud</strong>\n            <ion-fab>\n                <button ion-fab mini color="light">\n          <ion-icon name="ios-heart" color="google"></ion-icon>\n        </button>\n            </ion-fab>\n            <hr>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list>\n                <ion-item>\n                    <ion-label floating>EPS</ion-label>\n                    <ion-input type="text" [(ngModel)]="eps" (blur)="GuardarData()"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Número de Identificación</ion-label>\n                    <ion-input [(ngModel)]="documento" type="number" (blur)="GuardarData()"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Tipo de Sangre</ion-label>\n                    <ion-select #tipSangre [(ngModel)]="tipoSangre" (ionChange)="GuardarData(tipSangre.value)">\n                        <ion-option value="O+">O+</ion-option>\n                        <ion-option value="O-">O-</ion-option>\n                        <ion-option value="A+">A+</ion-option>\n                        <ion-option value="A-">A- </ion-option>\n                        <ion-option value="B+">B+ </ion-option>\n                        <ion-option value="B-">B-</ion-option>\n                        <ion-option value="AB+">AB+</ion-option>\n                        <ion-option value="AB-">AB-</ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <strong>Medicamentos</strong>\n            <ion-fab>\n                <button ion-fab mini color="google" (click)="AgregarOpcion(\'medicamentos\')">\n          <ion-icon name="ios-medkit"></ion-icon>\n        </button>\n            </ion-fab>\n            <hr>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list>\n            </ion-list>\n\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <strong>Contactos de Emergencia</strong>\n            <ion-fab>\n                <button ion-fab mini color="moto" (click)="AgregarOpcion(\'contacto\')">\n          <ion-icon name="ios-contacts"></ion-icon>\n        </button>\n            </ion-fab>\n            <hr>\n        </ion-card-header>\n        <ion-card-content>\n\n            <ion-list>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="./assets/img/contact.png">\n                    </ion-avatar>\n                    <h2>Daniel Urueña</h2>\n                    <h3>Amigo</h3>\n                    <p>311-856-548</p>\n                </ion-item>\n\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="./assets/img/contact.png">\n                    </ion-avatar>\n                    <h2>Diego Silva</h2>\n                    <h3>Amigo</h3>\n                    <p>311-856-548</p>\n                </ion-item>\n            </ion-list>\n\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\opciones\mi-informacion\mi-informacion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_crear_usuario_crear_usuario__["a" /* CrearUsuarioProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], MiInformacionPage);

//# sourceMappingURL=mi-informacion.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisRutasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MisRutasPage = (function () {
    function MisRutasPage(navCtrl, navParams, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.rutasRealizada = new Array();
        this.usuario = this.navParams.data;
        var resultadoRutaFire = this.afDB.list('rutas').valueChanges();
        var suscripcionResultadoRutaFire = resultadoRutaFire.subscribe(function (listRutas) {
            listRutas.forEach(function (ruta) {
                var rutaObj = ruta;
                var listaRutaUsuarios = Object.keys(rutaObj.rutaUsuarios).map(function (key) { return rutaObj.rutaUsuarios[key]; });
                if (listaRutaUsuarios.find(function (f) { return f.nombre == _this.usuario.idUsuario; }) != undefined) {
                    _this.imagenRutaMaps = "https://maps.googleapis.com/maps/api/staticmap";
                    //Set the Google Map Center.
                    _this.imagenRutaMaps += "?center=" + rutaObj.origen + "|" + rutaObj.destino + "";
                    //Set the Google Map Size.
                    _this.imagenRutaMaps += "&size=640x400";
                    //Set the Google Map Zoom.
                    _this.imagenRutaMaps += "&zoom=" + 11;
                    //Set the Google Map Type.
                    _this.imagenRutaMaps += "&maptype=" + "roadmap";
                    //Origen
                    _this.imagenRutaMaps += "&markers=color:red|label:O|" + rutaObj.origen + "";
                    //Destino
                    _this.imagenRutaMaps += "&markers=color:green|label:D|" + rutaObj.destino + "";
                    //Ruta
                    _this.imagenRutaMaps += "&path=color:0x0000ff|weight:5|" + rutaObj.origen + "|" + rutaObj.destino + "";
                    _this.rutasRealizada.push({
                        objRuta: rutaObj,
                        rutaImagen: _this.imagenRutaMaps
                    });
                }
            });
            suscripcionResultadoRutaFire.unsubscribe();
        });
    }
    return MisRutasPage;
}());
MisRutasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mis-rutas',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\opciones\mis-rutas\mis-rutas.html"*/'<ion-header>\n\n  <ion-navbar color="moto">\n\n    <ion-title>\n\n        <ion-icon ios="ios-map" md="md-map" color="white" style="padding-right:5px;"></ion-icon>Mis Rutas\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="padding:5px">\n\n  <ion-card *ngFor="let ruta of rutasRealizada">\n\n    <ion-card-content>\n\n      <div id="divImagenRuta">\n\n        <img [src]="ruta.rutaImagen" alt="">\n\n      </div>\n\n      <div style="text-align: center;">\n\n          <label>\n\n              Origen(O): {{ruta.objRuta.origen}}\n\n            </label>\n\n            <label style="margin-left: 15%;">\n\n              Destino(D): {{ruta.objRuta.destino}}\n\n              </label>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card *ngIf="rutasRealizada.length == 0">\n\n      <ion-card-header>\n\n        No haz realizado ninguna ruta.\n\n      </ion-card-header>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\opciones\mis-rutas\mis-rutas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], MisRutasPage);

//# sourceMappingURL=mis-rutas.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Login/email/email.module": [
		547,
		19
	],
	"../pages/Login/recordar-contrasena/recordar-contrasena.module": [
		549,
		18
	],
	"../pages/Login/redes-sociales/redes-sociales.module": [
		548,
		17
	],
	"../pages/Login/registro/registro.module": [
		550,
		16
	],
	"../pages/modulos/inicio/inicio.module": [
		551,
		15
	],
	"../pages/modulos/inicio/post/emergencia/emergencia.module": [
		552,
		14
	],
	"../pages/modulos/inicio/post/normal/normal.module": [
		553,
		13
	],
	"../pages/modulos/inicio/post/robo/robo.module": [
		554,
		12
	],
	"../pages/modulos/inicio/post/tienda/tienda.module": [
		555,
		11
	],
	"../pages/modulos/mensajes/mensajes.module": [
		556,
		10
	],
	"../pages/modulos/notificaciones/notificaciones.module": [
		557,
		9
	],
	"../pages/modulos/perfil/opciones/mi-informacion/agregar-opciones/agregar-opciones.module": [
		558,
		0
	],
	"../pages/modulos/perfil/opciones/mi-informacion/mi-informacion.module": [
		559,
		8
	],
	"../pages/modulos/perfil/opciones/mis-rutas/mis-rutas.module": [
		560,
		7
	],
	"../pages/modulos/perfil/opciones/motos/crear-moto/crear-moto.module": [
		561,
		6
	],
	"../pages/modulos/perfil/opciones/motos/motos.module": [
		562,
		5
	],
	"../pages/modulos/perfil/perfil.module": [
		563,
		4
	],
	"../pages/modulos/rutas/rutas.module": [
		564,
		3
	],
	"../pages/modulos/tiendas/principal/principal.module": [
		565,
		2
	],
	"../pages/tabs/tabs.module": [
		566,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 237;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuarios; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_subir_fotos_subir_fotos__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Usuarios = (function () {
    function Usuarios(afDB, subirFotosService) {
        this.afDB = afDB;
        this.subirFotosService = subirFotosService;
    }
    Usuarios.prototype.ValidarUsuarioRegistrado = function (idUsuario) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var validacion = _this.afDB.object('usuarios/' + idUsuario).valueChanges().subscribe(function (res) {
                if (res == null) {
                    validacion.unsubscribe();
                    resolve(false);
                }
                else {
                    validacion.unsubscribe();
                    resolve(true);
                }
            });
        });
        return promise;
    };
    Usuarios.prototype.CrearUsuarios = function (usuario) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.subirFotosService.SubirFotosFirebase('img_perfil', usuario.foto).then(function (res) {
                usuario.foto = res.toString();
                _this.afDB.list('usuarios').set(usuario.idUsuario, usuario).then(function (res) {
                    resolve();
                });
            });
        });
        return promise;
    };
    Usuarios.prototype.ConsultarUsuario = function (idUsuario) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var usuario = _this.afDB.object('usuarios/' + idUsuario).valueChanges();
            var usuarioData = usuario.subscribe(function (res) {
                var usuarios = res;
                usuarioData.unsubscribe();
                resolve(usuarios);
            });
        });
        return promise;
    };
    return Usuarios;
}());
Usuarios = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__providers_subir_fotos_subir_fotos__["a" /* SubirFotosProvider */]])
], Usuarios);

//# sourceMappingURL=usuarios.cs.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rutaUsuarios; });
var rutaUsuarios = (function () {
    function rutaUsuarios() {
    }
    return rutaUsuarios;
}());

//# sourceMappingURL=rutaUsuarios.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotoGaleriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FotoGaleriaProvider = (function () {
    function FotoGaleriaProvider(http, camera, imagePicker) {
        this.http = http;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.info = { foto: '', imgPrevie: '' };
        console.log('Hello FotoGaleriaProvider Provider');
    }
    FotoGaleriaProvider.prototype.Camara = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var options = {
                quality: 80,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                correctOrientation: true
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.info = {
                    imgPrevie: 'data:image/jpeg;base64,' + imageData,
                    foto: imageData
                };
                resolve();
            }, function (err) {
                // this.mostrar_mensaje("no se puede mostrar la camara en el navegador");
                console.log("error");
                reject();
            });
        });
        return promise;
    };
    FotoGaleriaProvider.prototype.Galeria = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var options = {
                quality: 80,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: _this.camera.PictureSourceType.SAVEDPHOTOALBUM
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.info = {
                    imgPrevie: 'data:image/jpeg;base64,' + imageData,
                    foto: imageData
                };
                resolve();
            }, function (err) {
                // this.mostrar_mensaje("no se puede mostrar la camara en el navegador");
                console.log("error");
                reject();
            });
        });
        return promise;
    };
    return FotoGaleriaProvider;
}());
FotoGaleriaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
], FotoGaleriaProvider);

//# sourceMappingURL=foto-galeria.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Usuarios_usuarios_cs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegistroUsuarioPage = (function () {
    function RegistroUsuarioPage(navCtrl, navParams, fb, actionSheetCtrl, camera, storage, usuarios, imagePicker, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.storage = storage;
        this.usuarios = usuarios;
        this.imagePicker = imagePicker;
        this.alertCtrl = alertCtrl;
        this.titulo = "Registro de perfil";
        this.imgPreview = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
        this.formulario = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^([a-zA-Zñáéíóú]+[\s]*){4,25}$/)]]
        });
    }
    RegistroUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroUsuarioPage');
    };
    RegistroUsuarioPage.prototype.ngAfterViewInit = function () {
        this.slides.paginationType = "progress";
        this.slides.direction = "horizontal";
        this.slides.lockSwipes(true);
    };
    RegistroUsuarioPage.prototype.OnFocus = function () {
        document.getElementsByClassName('scroll-content')[0].className += " padding";
    };
    RegistroUsuarioPage.prototype.RegistrarUsuario = function () {
        var _this = this;
        this.storage.get("nombreUsuario").then(function (res) {
            _this.storage.get("_correo_").then(function (correo) {
                var usuario = {
                    idUsuario: res,
                    correo: correo,
                    nombre: _this.nombre,
                    foto: _this.foto == undefined ? 'https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805' : _this.foto,
                    estadoConexion: true
                };
                _this.usuarios.CrearUsuarios(usuario).then(function (res) {
                    _this.alertCtrl.create({
                        title: "Bienvenido",
                        subTitle: "Felicidades, ahora haces parte de la comunidad mas grande de moteros del mundo!",
                        buttons: ["Aceptar"]
                    }).present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
                });
            });
        });
    };
    RegistroUsuarioPage.prototype.Continuar = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    RegistroUsuarioPage.prototype.SeleccionarFoto = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Seleccionar',
            buttons: [
                {
                    text: 'Camara',
                    icon: 'ios-camera',
                    handler: function () {
                        _this.Camara();
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Galeria',
                    icon: 'ios-images',
                    cssClass: 'galeria',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RegistroUsuarioPage.prototype.Camara = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.imgPreview = 'data:image/jpeg;base64,' + imageData;
            _this.foto = imageData;
        }, function (err) {
            // this.mostrar_mensaje("no se puede mostrar la camara en el navegador");
            console.log("error");
        });
    };
    RegistroUsuarioPage.prototype.Galeria = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.imgPreview = 'data:image/jpeg;base64,' + imageData;
            _this.foto = imageData;
        }, function (err) {
            // this.mostrar_mensaje("no se puede mostrar la camara en el navegador");
            console.log("error");
        });
    };
    return RegistroUsuarioPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
], RegistroUsuarioPage.prototype, "slides", void 0);
RegistroUsuarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registro-usuario',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\registro-usuario\registro-usuario.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{titulo}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-slides pager>\n\n\n\n    <ion-slide>\n\n      <form [formGroup]="formulario">\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Ingresa tu nombre</ion-label>\n\n          <ion-input type="text" formControlName="nombre" maxlength="25" (focus)="OnFocus()" [(ngModel)]="nombre"></ion-input>\n\n          <p color="danger" ion-text *ngIf="formulario.get(\'nombre\').hasError(\'required\')">Ingresa tu nombre para continuar</p>\n\n          <p color="danger" ion-text *ngIf="formulario.get(\'nombre\').hasError(\'pattern\')">Ingresa un nombre valido</p>\n\n        </ion-item>\n\n        <div padding>\n\n          <button ion-button color="moto" (click)="Continuar(); titulo=\'Foto perfil\'" [disabled]="formulario.get(\'nombre\').invalid">Continuar</button>\n\n        </div>\n\n      </form>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <div  class="imagen-perfil" (click)="SeleccionarFoto()">\n\n        <img [src]="imgPreview">\n\n        <div class="select-imagen-perfil">\n\n          <ion-icon name="ios-camera"></ion-icon> Seleccionar\n\n        </div>\n\n      </div>\n\n      <h2>{{nombre}}</h2>\n\n      <div padding>\n\n        <button ion-button color="moto" (click)="RegistrarUsuario()">Terminar</button>\n\n      </div>\n\n    </ion-slide>\n\n  \n\n  </ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\registro-usuario\registro-usuario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__Clases_Modulos_Usuarios_usuarios_cs__["a" /* Usuarios */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], RegistroUsuarioPage);

//# sourceMappingURL=registro-usuario.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushnotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PushnotificationProvider = (function () {
    function PushnotificationProvider(oneSignal, platform) {
        this.oneSignal = oneSignal;
        this.platform = platform;
    }
    PushnotificationProvider.prototype.InitNotification = function () {
        if (this.platform.is('cordova')) {
            this.oneSignal.startInit('0bc711c8-0f08-4a2b-90c5-bc37812cb9b9', '1017500417926');
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            this.oneSignal.handleNotificationReceived().subscribe(function () {
                // do something when notification is received
            });
            this.oneSignal.handleNotificationOpened().subscribe(function () {
                // do something when a notification is opened
            });
            this.oneSignal.endInit();
        }
    };
    return PushnotificationProvider;
}());
PushnotificationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
], PushnotificationProvider);

//# sourceMappingURL=pushnotification.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Config_firebase__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_maps__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modulos_inicio_inicio__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_modulos_rutas_rutas__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modulos_notificaciones_notificaciones__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_modulos_mensajes_mensajes__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_modulos_tiendas_principal_principal__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_modulos_perfil_perfil__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_modulos_registro_usuario_registro_usuario__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modulos_perfil_opciones_motos_motos__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modulos_perfil_opciones_motos_crear_moto_crear_moto__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_modulos_perfil_opciones_mi_informacion_mi_informacion__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_modulos_perfil_opciones_mis_rutas_mis_rutas__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_modulos_inicio_post_robo_robo__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_Login_email_email__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_Login_registro_registro__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_Login_redes_sociales_redes_sociales__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_Login_recordar_contrasena_recordar_contrasena__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_modulos_inicio_post_normal_normal__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_modulos_inicio_post_emergencia_emergencia__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_modulos_inicio_post_tienda_tienda__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Clases_Login_Login_cs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Clases_Modulos_Usuarios_usuarios_cs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Clases_Modulos_Posts_Normal_cs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__Clases_Modulos_Posts_Tienda_cs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__Components_Mapa_Mapa_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_encabezado_encabezado__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__Components_UsuariosOnline_UsuariosOnline_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__directives_elastic_header_elastic_header__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_geolocation__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_native_geocoder__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_sms__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_facebook_facebook__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_gyroscope__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_googleMaps_GeoCoder_GeoCoder__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_google_google__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_cerrar_sesion_cerrar_sesion__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_crear_usuario_crear_usuario__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_image_picker__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_login_login__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_subir_fotos_subir_fotos__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_foto_galeria_foto_galeria__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_onesignal__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_pushnotification_pushnotification__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Local Storage

//Firebase




//Facebook

//Google


//Paginas














//Login




//Post



// import {AgregarOpcionesPage  } from "../pages/modulos/perfil/opciones/mi-informacion/agregar-opciones/agregar-opciones";
//clases




//Components



//Directivas

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_30__pages_Login_email_email__["a" /* EmailPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_Login_redes_sociales_redes_sociales__["a" /* RedesSocialesPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_Login_registro_registro__["a" /* RegistroPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_Login_recordar_contrasena_recordar_contrasena__["a" /* RecordarContrasenaPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_modulos_registro_usuario_registro_usuario__["a" /* RegistroUsuarioPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_modulos_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_modulos_inicio_post_normal_normal__["a" /* NormalPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_modulos_inicio_post_emergencia_emergencia__["a" /* EmergenciaPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_modulos_inicio_post_tienda_tienda__["a" /* TiendaPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_modulos_rutas_rutas__["a" /* RutasPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_modulos_notificaciones_notificaciones__["a" /* NotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_41__Components_Mapa_Mapa_component__["a" /* MapaComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_encabezado_encabezado__["a" /* EncabezadoComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_modulos_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_modulos_tiendas_principal_principal__["a" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_modulos_mensajes_mensajes__["a" /* MensajesPage */],
            __WEBPACK_IMPORTED_MODULE_43__Components_UsuariosOnline_UsuariosOnline_component__["a" /* UsuariosOnlineComponent */],
            __WEBPACK_IMPORTED_MODULE_44__directives_elastic_header_elastic_header__["a" /* ElasticHeaderDirective */],
            __WEBPACK_IMPORTED_MODULE_25__pages_modulos_perfil_opciones_motos_motos__["a" /* MotosPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_modulos_perfil_opciones_motos_crear_moto_crear_moto__["a" /* CrearMotoPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_modulos_perfil_opciones_mi_informacion_mi_informacion__["a" /* MiInformacionPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_modulos_perfil_opciones_mis_rutas_mis_rutas__["a" /* MisRutasPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_modulos_inicio_post_robo_robo__["a" /* RoboPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {
                platforms: {
                    android: {
                        tabsPlacement: 'top',
                        pageTransition: 'md-transition'
                    }
                }
            }, {
                links: [
                    { loadChildren: '../pages/Login/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Login/redes-sociales/redes-sociales.module#RedesSocialesPageModule', name: 'RedesSocialesPage', segment: 'redes-sociales', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Login/recordar-contrasena/recordar-contrasena.module#RecordarContrasenaPageModule', name: 'RecordarContrasenaPage', segment: 'recordar-contrasena', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Login/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/inicio/post/emergencia/emergencia.module#EmergenciaPageModule', name: 'EmergenciaPage', segment: 'emergencia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/inicio/post/normal/normal.module#NormalPageModule', name: 'NormalPage', segment: 'normal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/inicio/post/robo/robo.module#RoboPageModule', name: 'RoboPage', segment: 'robo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/inicio/post/tienda/tienda.module#TiendaPageModule', name: 'TiendaPage', segment: 'tienda', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/mensajes/mensajes.module#MensajesPageModule', name: 'MensajesPage', segment: 'mensajes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/notificaciones/notificaciones.module#NotificacionesPageModule', name: 'NotificacionesPage', segment: 'notificaciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/perfil/opciones/mi-informacion/agregar-opciones/agregar-opciones.module#AgregarOpcionesPageModule', name: 'AgregarOpcionesPage', segment: 'agregar-opciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/perfil/opciones/mi-informacion/mi-informacion.module#MiInformacionPageModule', name: 'MiInformacionPage', segment: 'mi-informacion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/perfil/opciones/mis-rutas/mis-rutas.module#MisRutasPageModule', name: 'MisRutasPage', segment: 'mis-rutas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/perfil/opciones/motos/crear-moto/crear-moto.module#CrearMotoPageModule', name: 'CrearMotoPage', segment: 'crear-moto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/perfil/opciones/motos/motos.module#MotosPageModule', name: 'MotosPage', segment: 'motos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/rutas/rutas.module#RutasPageModule', name: 'RutasPage', segment: 'rutas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modulos/tiendas/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__Config_firebase__["a" /* OPTIONS */]),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_30__pages_Login_email_email__["a" /* EmailPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_Login_redes_sociales_redes_sociales__["a" /* RedesSocialesPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_Login_registro_registro__["a" /* RegistroPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_Login_recordar_contrasena_recordar_contrasena__["a" /* RecordarContrasenaPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_modulos_registro_usuario_registro_usuario__["a" /* RegistroUsuarioPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_modulos_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_modulos_inicio_post_normal_normal__["a" /* NormalPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_modulos_inicio_post_emergencia_emergencia__["a" /* EmergenciaPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_modulos_inicio_post_tienda_tienda__["a" /* TiendaPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_modulos_rutas_rutas__["a" /* RutasPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_modulos_notificaciones_notificaciones__["a" /* NotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_41__Components_Mapa_Mapa_component__["a" /* MapaComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_encabezado_encabezado__["a" /* EncabezadoComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_modulos_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_modulos_tiendas_principal_principal__["a" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_modulos_mensajes_mensajes__["a" /* MensajesPage */],
            __WEBPACK_IMPORTED_MODULE_43__Components_UsuariosOnline_UsuariosOnline_component__["a" /* UsuariosOnlineComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pages_modulos_perfil_opciones_motos_motos__["a" /* MotosPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_modulos_perfil_opciones_motos_crear_moto_crear_moto__["a" /* CrearMotoPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_modulos_perfil_opciones_mi_informacion_mi_informacion__["a" /* MiInformacionPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_modulos_perfil_opciones_mis_rutas_mis_rutas__["a" /* MisRutasPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_modulos_inicio_post_robo_robo__["a" /* RoboPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_37__Clases_Login_Login_cs__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_38__Clases_Modulos_Usuarios_usuarios_cs__["a" /* Usuarios */],
            __WEBPACK_IMPORTED_MODULE_39__Clases_Modulos_Posts_Normal_cs__["a" /* Normal */],
            __WEBPACK_IMPORTED_MODULE_40__Clases_Modulos_Posts_Tienda_cs__["a" /* Tienda */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_45__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_47__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_48__providers_facebook_facebook__["a" /* FacebookProvider */],
            __WEBPACK_IMPORTED_MODULE_51__providers_google_google__["a" /* GoogleProvider */],
            __WEBPACK_IMPORTED_MODULE_46__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_52__providers_cerrar_sesion_cerrar_sesion__["a" /* CerrarSesionProvider */],
            __WEBPACK_IMPORTED_MODULE_53__providers_crear_usuario_crear_usuario__["a" /* CrearUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_56__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_50__providers_googleMaps_GeoCoder_GeoCoder__["a" /* GeoCoderProvider */],
            __WEBPACK_IMPORTED_MODULE_49__ionic_native_gyroscope__["a" /* Gyroscope */],
            __WEBPACK_IMPORTED_MODULE_54__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_55__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_57__providers_subir_fotos_subir_fotos__["a" /* SubirFotosProvider */],
            __WEBPACK_IMPORTED_MODULE_58__providers_foto_galeria_foto_galeria__["a" /* FotoGaleriaProvider */],
            __WEBPACK_IMPORTED_MODULE_59__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_60__providers_pushnotification_pushnotification__["a" /* PushnotificationProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPTIONS; });
var OPTIONS = {
    apiKey: "AIzaSyA7k02c-QfuyWxz1wG-c7Z0btdzV1ikTmE",
    authDomain: "moto-traveling-app.firebaseapp.com",
    databaseURL: "https://moto-traveling-app.firebaseio.com",
    projectId: "moto-traveling-app",
    storageBucket: "moto-traveling-app.appspot.com",
    messagingSenderId: "1017500417926"
};
//# sourceMappingURL=Config.firebase.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Login_redes_sociales_redes_sociales__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Clases_Modulos_Usuarios_usuarios_cs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modulos_registro_usuario_registro_usuario__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_pushnotification_pushnotification__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//Local storage

//Firebase


var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, _fireAuth, storage, afDB, alertCtrl, usuarios, pushProvider) {
        var _this = this;
        this._fireAuth = _fireAuth;
        this.storage = storage;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.usuarios = usuarios;
        this.pushProvider = pushProvider;
        this.connetion = true;
        var AUTENTICACION = _fireAuth.authState.subscribe(function (user) {
            _this._fireAuth.authState.subscribe(function (user) {
                console.log("usuario:" + user);
                if (!user) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_Login_redes_sociales_redes_sociales__["a" /* RedesSocialesPage */];
                    return;
                }
                else {
                    var nombreUsuario = user.email.replace(/\@/g, '');
                    nombreUsuario = nombreUsuario.replace(/\./g, '');
                    _this.storage.set('_correo_', user.email);
                    _this.usuarios.ValidarUsuarioRegistrado(nombreUsuario).then(function (res) {
                        if (res == true)
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                        else
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_modulos_registro_usuario_registro_usuario__["a" /* RegistroUsuarioPage */];
                    });
                }
            });
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pushProvider.InitNotification();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__Clases_Modulos_Usuarios_usuarios_cs__["a" /* Usuarios */],
        __WEBPACK_IMPORTED_MODULE_11__providers_pushnotification_pushnotification__["a" /* PushnotificationProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Interfaces_rutas__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Interfaces_rutaUsuarios__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Interfaces_ubicacionUsuarios__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Clases_Mapa_estilosMapa__ = __webpack_require__(534);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*Interfaces*/



/*Estilo Mapa*/

var MapaComponent = (function () {
    function MapaComponent(navParams, navCtrl, toastCtrl, geolocation, afDB, storage) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.afDB = afDB;
        this.storage = storage;
        this.markers = new Array();
        this.stilosMapa = new __WEBPACK_IMPORTED_MODULE_8__Clases_Mapa_estilosMapa__["a" /* estilosMapa */]();
        /*controlar cards de opciones en el mapa*/
        this.mostrarCrearRuta = true;
        this.mostrarInvitarUsuarios = false;
        this.mostrarPersonalizarMapa = false;
        this.metodoMapa = "ruta";
        this.origen = "";
        this.destino = "";
        this.nombreRuta = "";
        this.estiloMapaSeleccion = "defecto";
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.ruta = new __WEBPACK_IMPORTED_MODULE_5__Interfaces_rutas__["a" /* rutas */]();
        this.rutaUsuario = new __WEBPACK_IMPORTED_MODULE_6__Interfaces_rutaUsuarios__["a" /* rutaUsuarios */]();
        this.ubicacionActual = new __WEBPACK_IMPORTED_MODULE_7__Interfaces_ubicacionUsuarios__["a" /* ubicacionUsuarios */]();
        this.ubicacionActualGuardar = new __WEBPACK_IMPORTED_MODULE_7__Interfaces_ubicacionUsuarios__["a" /* ubicacionUsuarios */]();
        this.mapaCreado = false;
        this.marcadoresCreados = false;
        this.nombreRutaAceptada = "Ninguna";
    }
    MapaComponent.prototype.ngOnInit = function () {
        this.validarMapa();
    };
    MapaComponent.prototype.ngOnChanges = function () {
        console.log("change mapa ", this.flagValidarMapa);
        if (this.flagValidarMapa) {
            this.validarMapa();
            this.flagValidarMapa = false;
        }
    };
    MapaComponent.prototype.validarMapa = function () {
        var _this = this;
        this.storage.get('nombreRutaAceptada').then(function (val) {
            if (val != "Ninguna" && val != undefined) {
                _this.nombreRutaAceptada = val;
                _this.storage.set("nombreRutaAceptada", "Ninguna");
                _this.nombreRuta = val;
                var resultadoRutaFire = _this.afDB.object('rutas/' + _this.nombreRuta).valueChanges();
                var suscripcionResultadoRutaFire_1 = resultadoRutaFire.subscribe(function (resp) {
                    var rutaobj = resp;
                    _this.origen = rutaobj.origen;
                    _this.destino = rutaobj.destino;
                    suscripcionResultadoRutaFire_1.unsubscribe();
                    _this.crearRuta();
                });
            }
            var watch = _this.geolocation.watchPosition();
            _this.storage.get('nombreUsuario').then(function (val) {
                _this.nombreUsuarioSession = val;
                var parent = _this;
            });
            watch.subscribe(function (data) {
                var parent = _this;
                _this.storage.get('nombreUsuario').then(function (val) {
                    if (_this.metodoMapa == "ruta" && _this.mapaCreado) {
                        //Si se abrio el mapa por ruta se obtiene y actualiza la ubicacion del usuario en la ruta
                        parent.rutaUsuario.latitud = data.coords.latitude.toString();
                        parent.rutaUsuario.longitud = data.coords.longitude.toString();
                        ;
                        parent.rutaUsuario.nombre = val;
                        _this.afDB.object('rutas/' + _this.nombreRuta + '/rutaUsuarios/' + val).update(parent.rutaUsuario);
                    }
                });
            });
        });
    };
    MapaComponent.prototype.crearMapa = function (latitud, longitud) {
        var parent = this;
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 19,
            center: { lat: latitud, lng: longitud },
            fullscreenControl: false,
            zoomControl: true,
            valueOfstreetViewControl: true,
        });
        // Add a style-selector control to the map.
        // Set the map's style to the initial value of the selector.
        var styleSelector = document.getElementById('style-selector');
        this.map.setOptions({ styles: this.stilosMapa.styles[this.estiloMapaSeleccion] });
        // Apply new JSON when the user selects a different style.
        styleSelector.addEventListener('change', function () {
            parent.map.setOptions({ styles: parent.stilosMapa.styles[parent.estiloMapaSeleccion] });
        });
        this.directionsDisplay.setMap(this.map);
        this.mapaCreado = true;
    };
    MapaComponent.prototype.crearRuta = function () {
        var _this = this;
        if (this.nombreRuta == "") {
            this.mostrarToast('No se ingreso un nombre a la ruta');
            this.mostrarCrearRuta = true;
            return false;
        }
        var variableFecha = new Date();
        this.ruta = new __WEBPACK_IMPORTED_MODULE_5__Interfaces_rutas__["a" /* rutas */]();
        this.ruta.destino = this.destino;
        this.ruta.origen = this.origen;
        this.ruta.fecha = variableFecha.getDate().toString();
        this.afDB.list('rutas').set(this.nombreRuta, this.ruta).then(function (res) {
            _this.cerrarModal();
            _this.geolocation.getCurrentPosition().then(function (data) {
                if (_this.metodoMapa == "ruta") {
                    //Si se abrio el mapa por ruta se obtiene y actualiza la ubicacion del usuario en la ruta
                    _this.rutaUsuario.latitud = data.coords.latitude.toString();
                    _this.rutaUsuario.longitud = data.coords.longitude.toString();
                    _this.rutaUsuario.nombre = _this.nombreUsuarioSession;
                    _this.afDB.object('rutas/' + _this.nombreRuta + '/rutaUsuarios/' + _this.nombreUsuarioSession).update(_this.rutaUsuario);
                    var promesa = new Promise(function (resolve, reject) {
                        var parent = _this;
                        if (!_this.mapaCreado) {
                            _this.crearMapa(data.coords.latitude, data.coords.longitude);
                        }
                        var resultadoRutasUsuarios = _this.afDB.list('rutas/' + _this.nombreRuta + '/rutaUsuarios').valueChanges();
                        _this.suscripcionResultadoConsultaFire = resultadoRutasUsuarios.subscribe(function (rutasUs) {
                            _this.rutaUsuarios = rutasUs;
                            {
                                if (_this.rutaUsuarios != null && _this.rutaUsuarios.length != 0) {
                                    _this.rutaUsuarios.forEach(function (element) {
                                        if (!_this.marcadoresCreados) {
                                            var image = new google.maps.MarkerImage('assets/img/moto_250.png', new google.maps.Size(85, 85), new google.maps.Point(0, 0), new google.maps.Point(17, 34), new google.maps.Size(60, 60));
                                            _this.marker = new google.maps.Marker({
                                                title: element.nombre,
                                                Snippet: element.nombre,
                                                map: _this.map,
                                                icon: image,
                                                label: element.nombre,
                                                animation: 'BOUNCE',
                                                position: {
                                                    lat: parseFloat(element.latitud),
                                                    lng: parseFloat(element.longitud)
                                                }
                                            });
                                            if (_this.marker.title != null && _this.marker.title != undefined)
                                                _this.markers.push(_this.marker);
                                        }
                                        else {
                                            var latlng = new google.maps.LatLng(parseFloat(element.latitud), parseFloat(element.longitud));
                                            var marcadoActualizado = false;
                                            _this.markers.forEach(function (marcador) {
                                                if (marcador.title == element.nombre) {
                                                    marcador.setPosition(latlng);
                                                    marcadoActualizado = true;
                                                }
                                            });
                                            if (!marcadoActualizado) {
                                                var image = new google.maps.MarkerImage('assets/img/moto_250.png', new google.maps.Size(85, 85), new google.maps.Point(0, 0), new google.maps.Point(17, 34), new google.maps.Size(60, 60));
                                                _this.marker = new google.maps.Marker({
                                                    title: element.nombre,
                                                    Snippet: element.nombre,
                                                    map: _this.map,
                                                    icon: image,
                                                    label: element.nombre,
                                                    animation: 'BOUNCE',
                                                    position: {
                                                        lat: parseFloat(element.latitud),
                                                        lng: parseFloat(element.longitud)
                                                    }
                                                });
                                                if (_this.marker.title != null && _this.marker.title != undefined)
                                                    _this.markers.push(_this.marker);
                                            }
                                        }
                                    });
                                    _this.marcadoresCreados = true;
                                }
                            }
                        });
                    });
                }
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
        this.directionsService.route({
            origin: this.origen,
            destination: this.destino,
            travelMode: 'DRIVING',
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                _this.mostrarToast('No hemos encontrado esa ubicación');
            }
        });
    };
    MapaComponent.prototype.ngOnDestroy = function () {
        console.log("rrr destroy");
        this.suscripcionResultadoConsultaFire.unsubscribe();
    };
    MapaComponent.prototype.mostrarCardCrearRuta = function () {
        if (!this.mapaCreado) {
            this.mostrarToast("Por favor cree una ruta para continuar");
            this.cambiarColorFondoCardActivo("cardCrearRuta");
            this.mostrarCrearRuta = true;
            return false;
        }
        this.mostrarInvitarUsuarios = false;
        this.mostrarPersonalizarMapa = false;
        if (this.mostrarCrearRuta) {
            this.aplicarEstilosUbicacionActual(false);
            this.cambiarColorFondoCardActivo("none");
            this.mostrarCrearRuta = false;
        }
        else {
            this.aplicarEstilosUbicacionActual(true);
            this.cambiarColorFondoCardActivo("cardCrearRuta");
            this.mostrarCrearRuta = true;
        }
    };
    MapaComponent.prototype.mostrarCardInvitarUsuarios = function () {
        if (!this.mapaCreado) {
            this.mostrarToast("Se debe crear una ruta primero");
            this.cambiarColorFondoCardActivo("cardCrearRuta");
            this.mostrarCrearRuta = true;
            return false;
        }
        this.mostrarPersonalizarMapa = false;
        this.mostrarCrearRuta = false;
        if (this.mostrarInvitarUsuarios) {
            this.aplicarEstilosUbicacionActual(false);
            this.cambiarColorFondoCardActivo("none");
            this.mostrarInvitarUsuarios = false;
        }
        else {
            this.aplicarEstilosUbicacionActual(true);
            this.cambiarColorFondoCardActivo("cardinvitarUsuarios");
            this.mostrarInvitarUsuarios = true;
        }
    };
    MapaComponent.prototype.mostrarCardPersonalizarMapa = function () {
        if (!this.mapaCreado) {
            this.mostrarToast("Se debe crear una ruta primero");
            this.cambiarColorFondoCardActivo("cardCrearRuta");
            this.mostrarCrearRuta = true;
            return false;
        }
        this.mostrarInvitarUsuarios = false;
        this.mostrarCrearRuta = false;
        if (this.mostrarPersonalizarMapa) {
            this.aplicarEstilosUbicacionActual(false);
            this.cambiarColorFondoCardActivo("none");
            this.mostrarPersonalizarMapa = false;
        }
        else {
            this.aplicarEstilosUbicacionActual(true);
            this.cambiarColorFondoCardActivo("cardpersonalizarMapa");
            this.mostrarPersonalizarMapa = true;
        }
    };
    MapaComponent.prototype.cerrarModal = function () {
        this.aplicarEstilosUbicacionActual(false);
        this.cambiarColorFondoCardActivo("none");
        this.mostrarInvitarUsuarios = false;
        this.mostrarCrearRuta = false;
        this.mostrarPersonalizarMapa = false;
    };
    MapaComponent.prototype.mostrarToast = function (mensaje) {
        this.cerrarModal();
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    MapaComponent.prototype.cambiarColorFondoCardActivo = function (cardActivo) {
        document.getElementById("cardCrearRuta").style.removeProperty("background-color");
        document.getElementById("cardinvitarUsuarios").style.removeProperty("background-color");
        document.getElementById("cardpersonalizarMapa").style.removeProperty("background-color");
        if (cardActivo != "none") {
            console.log(cardActivo);
            document.getElementById(cardActivo).style.backgroundColor = "rgb(255, 152, 0)";
        }
    };
    MapaComponent.prototype.validarRespuestaInvitacionUsuario = function (respuestaInvitacionUsuario) {
        if (respuestaInvitacionUsuario) {
            this.mostrarToast('Se ha enviado la invitacion correctamente');
        }
        else {
            this.mostrarToast('El usuario ya aceptado la invitación');
        }
    };
    MapaComponent.prototype.centrarUbicacion = function () {
        var latlng = new google.maps.LatLng(parseFloat(this.rutaUsuario.latitud), parseFloat(this.rutaUsuario.longitud));
        this.map.setOptions({
            center: latlng,
            zoom: 19
        });
    };
    MapaComponent.prototype.aplicarEstilosUbicacionActual = function (modalAbierta) {
        var divubicacionActual = document.getElementById("ubicacionActual");
        if (modalAbierta) {
            divubicacionActual.style.position = "relative";
            divubicacionActual.style.top = "120px";
            divubicacionActual.style.left = "1%";
        }
        else {
            divubicacionActual.style.position = "fixed";
            divubicacionActual.style.top = "180px";
            divubicacionActual.style.left = "5%";
        }
    };
    return MapaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapaComponent.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], MapaComponent.prototype, "flagValidarMapa", void 0);
MapaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'mapa-component',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\Components\Mapa\Mapa.component.html"*/'\n\n  \n\n  <ion-content>\n\n      \n\n    <div>\n\n        <ion-card>\n\n                <ion-card id="cardCrearRuta" class="CardOpcionMapa" (click)="mostrarCardCrearRuta()">\n\n                    <ion-icon class="estiloOpcionesMapa" ios="ios-map" md="md-map"></ion-icon>\n\n                </ion-card>\n\n                <ion-card id="cardinvitarUsuarios" class="CardOpcionMapa" style="margin-left: -6px;" (click)="mostrarCardInvitarUsuarios()">\n\n                    <ion-icon class="estiloOpcionesMapa" ios="ios-people" md="md-people"></ion-icon>\n\n                </ion-card>\n\n                <ion-card id="cardpersonalizarMapa" class="CardOpcionMapa" style="margin-left: -6px;" (click)="mostrarCardPersonalizarMapa()">\n\n                  <ion-icon class="estiloOpcionesMapa" ios="ios-create" md="md-create"></ion-icon>\n\n                </ion-card>\n\n        </ion-card>\n\n\n\n        <ion-card *ngIf="mostrarCrearRuta">\n\n            <ion-card-header>\n\n              ¡Crea una ruta y empieza a rodar!\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                  <ion-list>\n\n                      <ion-item>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                        <ion-input placeholder="Escriba el nombre de la ruta:" [(ngModel)]="nombreRuta" type="text"></ion-input>\n\n                      </ion-item>\n\n\n\n                      <ion-item>\n\n                          <ion-label stacked>Origen:</ion-label>\n\n                        <ion-input placeholder="Escriba el nombre del lugar de su origen:" [(ngModel)]="origen" type="text"></ion-input>\n\n                      </ion-item>\n\n                    \n\n                      <ion-item>\n\n                          <ion-label stacked>Destino:</ion-label>\n\n                        <ion-input placeholder="Escriba el nombre del lugar de su destino:" [(ngModel)]="destino" type="text"></ion-input>\n\n                      </ion-item>\n\n                    \n\n                    </ion-list>\n\n\n\n                    <div padding>\n\n                      <button ion-button style="background-color: rgb(255, 152, 0);" (click)="crearRuta()" block>Calcular ruta</button>\n\n                    </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card *ngIf="mostrarInvitarUsuarios">\n\n            <ion-card-header>\n\n              ¡Puedes invitar a tus amigos que se encuentren en linea!\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <UsuariosOnline-component [ruta]="nombreRuta" (usuarioCreado)="validarRespuestaInvitacionUsuario($event)"></UsuariosOnline-component>\n\n            </ion-card-content>\n\n        </ion-card>\n\n       \n\n\n\n        <ion-card [ngStyle]="{\'display\': mostrarPersonalizarMapa? \'block\' : \'none\'}">\n\n            <ion-card-header>\n\n              ¡Puedes personalizar tu mapa como mejor prefieras!\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <div id="style-selector-control"  class="map-control">\n\n                   Estilos de mapa:\n\n                    <select [(ngModel)]="estiloMapaSeleccion" (change)="cerrarModal()" id="style-selector" class="selector-control">\n\n                      <option value="defecto" >Por defecto</option>\n\n                      <option value="plateado">Plata</option>\n\n                      <option value="noche">Noche</option>\n\n                      <option value="retro" >Retro</option>\n\n                      <option value="oculto">Oculto</option>\n\n                    </select>\n\n                  </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div id="modal" [ngStyle]="{\'display\': mostrarCrearRuta || mostrarInvitarUsuarios || mostrarPersonalizarMapa? \'block\' : \'none\'}"></div>\n\n      <div id="contMapa" class="contenedorMapa">\n\n          <div  id="ubicacionActual">\n\n              <button [ngStyle]="{\'display\':mapaCreado?\'block\':\'none\'}" ion-button style="width: 40px; background-color: white;" (click)="centrarUbicacion()">\n\n              <ion-icon style="font-size: 2.5em; color:blue;" ios="ios-disc" md="md-disc"></ion-icon>\n\n              </button>\n\n          </div>\n\n          <div #map id="map"></div>\n\n      </div>\n\n\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\Components\Mapa\Mapa.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], MapaComponent);

//# sourceMappingURL=Mapa.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rutas; });
var rutas = (function () {
    function rutas() {
    }
    return rutas;
}());

//# sourceMappingURL=rutas.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ubicacionUsuarios; });
var ubicacionUsuarios = (function () {
    function ubicacionUsuarios() {
    }
    return ubicacionUsuarios;
}());

//# sourceMappingURL=ubicacionUsuarios.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return estilosMapa; });
var estilosMapa = (function () {
    function estilosMapa() {
        this.styles = {
            default: null,
            plateado: [
                {
                    elementType: 'geometry',
                    stylers: [{ color: '#f5f5f5' }]
                },
                {
                    elementType: 'labels.icon',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#616161' }]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#f5f5f5' }]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#bdbdbd' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [{ color: '#eeeeee' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#757575' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#e5e5e5' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9e9e9e' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#ffffff' }]
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#757575' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#dadada' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#616161' }]
                },
                {
                    featureType: 'road.local',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9e9e9e' }]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'geometry',
                    stylers: [{ color: '#e5e5e5' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'geometry',
                    stylers: [{ color: '#eeeeee' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#c9c9c9' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9e9e9e' }]
                }
            ],
            noche: [
                { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#263c3f' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#6b9a76' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#38414e' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#212a37' }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9ca5b3' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#746855' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#1f2835' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#f3d19c' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{ color: '#2f3948' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#17263c' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515c6d' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#17263c' }]
                }
            ],
            retro: [
                { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
                {
                    featureType: 'administrative',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#c9b2a6' }]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#dcd2be' }]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#ae9e90' }]
                },
                {
                    featureType: 'landscape.natural',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#93817c' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry.fill',
                    stylers: [{ color: '#a5b076' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#447530' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#f5f1e6' }]
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'geometry',
                    stylers: [{ color: '#fdfcf8' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#f8c967' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#e9bc62' }]
                },
                {
                    featureType: 'road.highway.controlled_access',
                    elementType: 'geometry',
                    stylers: [{ color: '#e98d58' }]
                },
                {
                    featureType: 'road.highway.controlled_access',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#db8555' }]
                },
                {
                    featureType: 'road.local',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#806b63' }]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#8f7d77' }]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#ebe3cd' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry.fill',
                    stylers: [{ color: '#b9d3c2' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#92998d' }]
                }
            ],
            oculto: [
                {
                    featureType: 'poi.business',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'labels.icon',
                    stylers: [{ visibility: 'off' }]
                }
            ]
        };
    }
    return estilosMapa;
}());

//# sourceMappingURL=estilosMapa.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncabezadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the EncabezadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EncabezadoComponent = (function () {
    function EncabezadoComponent() {
        console.log('Hello EncabezadoComponent Component');
        this.text = 'Hello World';
    }
    return EncabezadoComponent;
}());
EncabezadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'encabezado',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\components\encabezado\encabezado.html"*/''/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\components\encabezado\encabezado.html"*/
    }),
    __metadata("design:paramtypes", [])
], EncabezadoComponent);

//# sourceMappingURL=encabezado.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosOnlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Interfaces_invitacionesRuta__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsuariosOnlineComponent = (function () {
    function UsuariosOnlineComponent(afDB, alertCtrl, storage) {
        var _this = this;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.usuarioCreado = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        storage.get("nombreUsuario").then(function (respuesta) {
            _this.nombreUsuarioSession = respuesta;
        });
    }
    UsuariosOnlineComponent.prototype.ngOnInit = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var resultadoConsultaFire = _this.afDB.list('usuarios').valueChanges();
            _this.suscripcionResultadoConsultaFire = resultadoConsultaFire.subscribe(function (resp) {
                _this.listaUsuariosOnline = resp.filter(function (filtro) { return filtro.estadoConexion; });
            });
        });
    };
    UsuariosOnlineComponent.prototype.ngOnDestroy = function () {
        this.suscripcionResultadoConsultaFire.unsubscribe();
    };
    UsuariosOnlineComponent.prototype.crearInvitacionMapa = function (usuarioInvitado, usuarioCreadorRuta) {
        var _this = this;
        var usuarioInvitadoIdentidad = usuarioInvitado.replace(/\@/g, '').replace(/\./g, '');
        var alert = this.alertCtrl.create({
            title: 'Confirmacion de invitacion',
            message: 'Esta usted seguro de invitar a la ruta el usuario ' + usuarioInvitadoIdentidad,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        var list = new Array();
                        var invitacionRutaDTO = new __WEBPACK_IMPORTED_MODULE_3__Interfaces_invitacionesRuta__["a" /* invitacionesRuta */]();
                        invitacionRutaDTO.estado = "pendiente";
                        invitacionRutaDTO.fecha = new Date().toString();
                        invitacionRutaDTO.usuarioInvitacion = usuarioCreadorRuta;
                        invitacionRutaDTO.ruta = _this.ruta;
                        list.push(invitacionRutaDTO);
                        // let promesa = new Promise((resolve, reject) => {
                        //const result = this.afDB.object('invitacionesRuta/' + usuarioInvitadoIdentidad+"/"+ usuarioInvitadoIdentidad+this.ruta+'/estado').valueChanges();
                        // result.subscribe((res) => {
                        //if (res == null) {
                        _this.afDB.list('invitacionesRuta/' + usuarioInvitadoIdentidad).set(usuarioInvitadoIdentidad + invitacionRutaDTO.ruta, invitacionRutaDTO).then(function (res) {
                            _this.usuarioCreado.emit(true);
                            //   resolve();
                        });
                        //} else if (res != "Aceptada") {
                        //   this.afDB.list('invitacionesRuta/'+usuarioInvitadoIdentidad).set(usuarioInvitadoIdentidad+invitacionRutaDTO.ruta,invitacionRutaDTO).then(res => {
                        //    this.usuarioCreado.emit(true);
                        // resolve();
                        // });
                        //}
                        // else
                        //{
                        //   this.usuarioCreado.emit(false);
                        //   resolve();
                        // }
                        // }, err => {
                        // resolve();
                        //  console.error("error" + err);
                        // });
                        // });
                    }
                }
            ]
        });
        alert.present();
    };
    UsuariosOnlineComponent.prototype.ngDestroy = function () {
        this.resultadoConsultaFire.unsubscribe();
    };
    return UsuariosOnlineComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], UsuariosOnlineComponent.prototype, "usuarioCreado", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], UsuariosOnlineComponent.prototype, "ruta", void 0);
UsuariosOnlineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'UsuariosOnline-component',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\Components\UsuariosOnline\UsuariosOnline.component.html"*/'<ion-list>\n\n    <ion-item-group>\n\n      <ion-item-divider color="light">\n\n          <label>Usuarios en línea</label>\n\n          <ion-icon ios="ios-radio-button-on" md="md-radio-button-on" style="color:green;"></ion-icon>\n\n      </ion-item-divider>\n\n      <ion-item *ngFor="let usuario of listaUsuariosOnline">\n\n        <ion-thumbnail item-start>\n\n          <img src="{{usuario.foto}}">\n\n        </ion-thumbnail>\n\n        <h2>{{usuario.nombre}}</h2>\n\n        <p>{{usuario.estadoConexion}}</p>\n\n        <button ion-button clear item-end (click)="crearInvitacionMapa(usuario.correo, nombreUsuarioSession)">Invitar</button>\n\n    </ion-item>\n\n    </ion-item-group>\n\n  </ion-list>'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\Components\UsuariosOnline\UsuariosOnline.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], UsuariosOnlineComponent);

//# sourceMappingURL=UsuariosOnline.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return invitacionesRuta; });
var invitacionesRuta = (function () {
    function invitacionesRuta() {
    }
    return invitacionesRuta;
}());

//# sourceMappingURL=invitacionesRuta.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElasticHeaderDirective = (function () {
    function ElasticHeaderDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ElasticHeaderDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = this.scrollerHandle.firstElementChild;
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.ticking = false;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        window.addEventListener('resize', function () {
            _this.headerHeight = _this.scrollerHandle.clientHeight;
        }, false);
        this.scrollerHandle.addEventListener('scroll', function () {
            if (!_this.ticking) {
                window.requestAnimationFrame(function () {
                    _this.updateElasticHeader();
                });
            }
            _this.ticking = true;
        });
    };
    ElasticHeaderDirective.prototype.updateElasticHeader = function () {
        this.scrollTop = this.scrollerHandle.scrollTop;
        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        this.ticking = false;
    };
    return ElasticHeaderDirective;
}());
ElasticHeaderDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[elastic-header]' // Attribute selector
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
], ElasticHeaderDirective);

//# sourceMappingURL=elastic-header.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crear_usuario_crear_usuario__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//servicios


//Firebase


//Faccebook

var FacebookProvider = (function () {
    function FacebookProvider(http, platform, facebook, _fireAuth, storage, alertCtrl, loadingCtrl, firedb, createUserService) {
        this.http = http;
        this.platform = platform;
        this.facebook = facebook;
        this._fireAuth = _fireAuth;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.firedb = firedb;
        this.createUserService = createUserService;
    }
    //Login en facebook
    FacebookProvider.prototype.signInWithFacebook = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Iniciando Sesión'
        });
        loading.present();
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                return _this.facebook.login(['public_profile', 'user_friends', 'email']).then(function (res) {
                    loading.dismiss();
                    var FACEBOOKCREDENTIAL = __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                    resolve();
                    return __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().signInWithCredential(FACEBOOKCREDENTIAL);
                }).catch(function (err) {
                    resolve();
                    loading.dismiss();
                    _this.ErrorSesion();
                });
            }
            else {
                _this._fireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"].FacebookAuthProvider())
                    .then(function (res) {
                    _this.usuario = {
                        nombre: res.user.displayName,
                        correo: res.user.email,
                        foto: res.user.photoURL,
                        telefono: 12345678
                    };
                    _this.createUserService.crearUsuario(_this.usuario).then(function (res) {
                        resolve();
                    });
                    loading.dismiss();
                    console.log(res);
                }).catch(function (err) {
                    resolve();
                    loading.dismiss();
                    console.error("error:" + err);
                    _this.ErrorSesion();
                });
            }
        });
        return promesa;
    };
    FacebookProvider.prototype.ErrorSesion = function () {
        var alert = this.alertCtrl.create({
            title: 'Facebook',
            subTitle: 'Lo sentimos, ha ocurrido un error al intentar iniciar sesión desde Facebook',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    return FacebookProvider;
}());
FacebookProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_5__crear_usuario_crear_usuario__["a" /* CrearUsuarioProvider */]])
], FacebookProvider);

//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Clases_Modulos_Usuarios_usuarios_cs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//Faccebook

//Google

//Local storage

var Login = (function () {
    function Login(afAuth, platform, facebook, google, storage, usuarios, afDB, alertCtrl) {
        this.afAuth = afAuth;
        this.platform = platform;
        this.facebook = facebook;
        this.google = google;
        this.storage = storage;
        this.usuarios = usuarios;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
    }
    Login.prototype.RegistrarUsuario = function (datos) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(datos.correo, datos.contrasena).then(function (res) {
                var idUsuario = datos.correo.replace(/\@/g, '');
                idUsuario = idUsuario.replace(/\./g, '');
                debugger;
                _this.storage.set('_correo_', datos.correo);
                _this.storage.set('nombreUsuario', idUsuario);
                resolve();
            }).catch(function (err) {
                console.log(err);
                reject();
            });
        });
        return promise;
    };
    Login.prototype.RecordarContrasena = function (correo) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.auth.sendPasswordResetEmail(correo).then(function (res) {
                console.log(res);
                resolve();
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
        return promise;
    };
    Login.prototype.IniciarSesionCorreo = function (usuario) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(usuario.correo, usuario.contrasena).then(function (res) {
                _this.storage.set('_correo_', usuario.correo);
                var nombreUsuario = usuario.correo.replace(/\@/g, '');
                nombreUsuario = nombreUsuario.replace(/\./g, '');
                _this.storage.set("nombreUsuario", nombreUsuario);
                _this.afDB.object('usuarios/' + nombreUsuario)
                    .update({ estadoConexion: true });
                resolve();
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
        return promise;
    };
    Login.prototype.CerrarSesion = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.storage.get('nombreUsuario').then(function (nombreUsu) {
                _this.afDB.object('usuarios/' + nombreUsu)
                    .update({ estadoConexion: false });
                _this.afAuth.auth.signOut().then(function (res) {
                    console.log(res);
                    resolve();
                });
            }).catch(function (err) {
                console.error(err);
                reject(err);
            });
        });
        return promise;
    };
    Login.prototype.IniciarSesionFacebook = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                _this.facebook.login(['public_profile', 'email']).then(function (res) {
                    var FACEBOOKCREDENTIAL = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                    __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithCredential(FACEBOOKCREDENTIAL).then(function (res) {
                        var nombreUsuario = res.email.replace(/\@/g, '');
                        nombreUsuario = nombreUsuario.replace(/\./g, '');
                        _this.storage.set("nombreUsuario", nombreUsuario);
                        var usuario = {
                            idUsuario: nombreUsuario,
                            nombre: res.displayName,
                            correo: res.email,
                            foto: res.photoURL,
                            estadoConexion: true
                        };
                        _this.usuarios.CrearUsuarios(usuario).then(function (res) {
                            _this.afDB.object('usuarios/' + usuario.idUsuario)
                                .update({ estadoConexion: true });
                            resolve();
                        });
                    });
                });
            }
            else {
                _this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider())
                    .then(function (res) {
                    var nombreUsuario = res.user.email.replace(/\@/g, '');
                    nombreUsuario = nombreUsuario.replace(/\./g, '');
                    _this.storage.set("nombreUsuario", nombreUsuario);
                    var usuario = {
                        idUsuario: nombreUsuario,
                        nombre: res.user.displayName,
                        correo: res.user.email,
                        foto: res.user.photoURL,
                        estadoConexion: true
                    };
                    _this.usuarios.CrearUsuarios(usuario).then(function (res) {
                        _this.afDB.object('usuarios/' + usuario.idUsuario)
                            .update({ estadoConexion: true });
                        resolve();
                    });
                }).catch(function (err) {
                    console.error(err);
                    reject(err);
                });
            }
        });
        return promise;
    };
    Login.prototype.IniciarSesionGoogle = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                _this.google.login({
                    'webClientId': '1017500417926-gnkf6qo1q51at29q798obb0lm6cphbd7.apps.googleusercontent.com',
                    'offline': true
                }).then(function (res) {
                    __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithCredential(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider.credential(res.idToken)).then(function (res) {
                        var nombreUsuario = res.email.replace(/\@/g, '');
                        nombreUsuario = nombreUsuario.replace(/\./g, '');
                        _this.storage.set("nombreUsuario", nombreUsuario);
                        var usuario = {
                            idUsuario: nombreUsuario,
                            nombre: res.displayName,
                            correo: res.email,
                            foto: res.photoURL,
                            estadoConexion: true
                        };
                        _this.usuarios.CrearUsuarios(usuario).then(function (res) {
                            _this.afDB.object('usuarios/' + nombreUsuario)
                                .update({ estadoConexion: true });
                            resolve();
                        });
                    }).catch(function (err) {
                        console.error(err);
                        reject(err);
                    });
                }).catch(function (err) {
                    console.error(err);
                    reject(err);
                });
            }
            else {
                _this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider()).then(function (res) {
                    var nombreUsuario = res.user.email.replace(/\@/g, '').replace(/\./g, '');
                    _this.storage.set("nombreUsuario", nombreUsuario);
                    var usuario = {
                        idUsuario: nombreUsuario,
                        nombre: res.user.displayName,
                        correo: res.user.email,
                        foto: res.user.photoURL,
                        estadoConexion: true
                    };
                    _this.usuarios.CrearUsuarios(usuario).then(function (res) {
                        _this.afDB.object('usuarios/' + usuario.idUsuario)
                            .update({ estadoConexion: true });
                        resolve();
                    });
                }).catch(function (err) {
                    console.error(err);
                    var alert = _this.alertCtrl.create({
                        title: 'Algo paso!',
                        subTitle: err,
                        buttons: ['Aceptar']
                    });
                    alert.present();
                    reject(err);
                });
                ;
            }
        });
        return promesa;
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__Clases_Modulos_Usuarios_usuarios_cs__["a" /* Usuarios */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */]])
], Login);

//# sourceMappingURL=Login.cs.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoCoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeoCoderProvider = (function () {
    function GeoCoderProvider(http) {
        this.http = http;
    }
    GeoCoderProvider.prototype.obtenerLocalizacion = function (term) {
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + term + 'CA&sensor=false')
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(function (error) { return Promise.resolve(error.json()); });
    };
    return GeoCoderProvider;
}());
GeoCoderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GeoCoderProvider);

//# sourceMappingURL=GeoCoder.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crear_usuario_crear_usuario__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Google

//servicios

//Firebase


//Local storage

var GoogleProvider = (function () {
    function GoogleProvider(http, platform, _fireAuth, google, alertCtrl, loadingCtrl, createUserService, storage) {
        this.http = http;
        this.platform = platform;
        this._fireAuth = _fireAuth;
        this.google = google;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.createUserService = createUserService;
        this.storage = storage;
        console.log('Hello GoogleProvider Provider');
    }
    GoogleProvider.prototype.signInWithGoogle = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Iniciando Sesión'
        });
        loading.present();
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                return _this.google.login({}).then(function (res) {
                    loading.dismiss();
                    var GOOGLECREDENTIAL = __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"].GoogleAuthProvider.credential(res.idToken);
                    __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().signInWithCredential(GOOGLECREDENTIAL);
                    resolve();
                }).catch(function (err) {
                    loading.dismiss();
                    _this.ErrorSesion();
                });
            }
            else {
                loading.present();
                _this._fireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"].GoogleAuthProvider()).then(function (res) {
                    loading.dismiss();
                    _this.usuario = {
                        nombre: res.user.displayName,
                        correo: res.user.email,
                        foto: res.user.photoURL,
                        telefono: 12345678
                    };
                    /*Se guarda usuario en localStorage*/
                    var nombreUsuario = res.user.email.replace("@", "").replace(".", "");
                    _this.storage.set("nombreUsuario", nombreUsuario);
                    /*Se crea usuario en firebase*/
                    _this.createUserService.crearUsuario(_this.usuario).then(function (res) {
                        resolve();
                    });
                }).catch(function (err) {
                    loading.dismiss();
                    _this.ErrorSesion();
                });
            }
        });
        return promesa;
    };
    GoogleProvider.prototype.ErrorSesion = function () {
        var alert = this.alertCtrl.create({
            title: 'Google',
            subTitle: 'Lo sentimos, ha ocurrido un error al intentar iniciar sesión desde Google',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    return GoogleProvider;
}());
GoogleProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__crear_usuario_crear_usuario__["a" /* CrearUsuarioProvider */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
], GoogleProvider);

//# sourceMappingURL=google.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CerrarSesionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { LoginPage } from "../../pages/Login/login/login";
// import { NavController } from 'ionic-angular';
//firebase

//Local storage

var CerrarSesionProvider = (function () {
    function CerrarSesionProvider(http, _fireAuth, storage) {
        this.http = http;
        this._fireAuth = _fireAuth;
        this.storage = storage;
        console.log('Hello CerrarSesionProvider Provider');
    }
    //Cerrar sesion en firebase
    CerrarSesionProvider.prototype.signOut = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            _this._fireAuth.auth.signOut();
            _this.storage.clear();
            resolve();
        });
        return promesa;
    };
    return CerrarSesionProvider;
}());
CerrarSesionProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], CerrarSesionProvider);

//# sourceMappingURL=cerrar-sesion.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginProvider = (function () {
    function LoginProvider(http) {
        this.http = http;
        console.log('Hello LoginProvider Provider');
    }
    return LoginProvider;
}());
LoginProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], LoginProvider);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirFotosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubirFotosProvider = (function () {
    function SubirFotosProvider(af) {
        this.af = af;
    }
    SubirFotosProvider.prototype.SubirFotosFirebase = function (carpeta, img) {
        var promesa = new Promise(function (resolve, reject) {
            if (img == '')
                resolve('');
            if ((img.indexOf('http://') != -1) || (img.indexOf('https://') != -1))
                resolve(img);
            var storaRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            var nombreArchivo = new Date().valueOf();
            var uploadTask = storaRef.child(carpeta + '/' + nombreArchivo).putString(img, 'base64', { contentType: 'image/jpeg' });
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { }, function (error) {
                reject(error);
            }, function () {
                var url = uploadTask.snapshot.downloadURL;
                resolve(url);
            });
        });
        return promesa;
    };
    return SubirFotosProvider;
}());
SubirFotosProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], SubirFotosProvider);

//# sourceMappingURL=subir-fotos.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modulos_inicio_inicio__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modulos_rutas_rutas__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modulos_mensajes_mensajes__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modulos_tiendas_principal_principal__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modulos_notificaciones_notificaciones__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modulos_perfil_perfil__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Clases_Modulos_Usuarios_usuarios_cs__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// paginas






//Fire base

//Local storage


var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, storage, afDB, usuarios) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.afDB = afDB;
        this.usuarios = usuarios;
        this.perfil = __WEBPACK_IMPORTED_MODULE_7__modulos_perfil_perfil__["a" /* PerfilPage */];
        this.foto = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
        this.inicio = __WEBPACK_IMPORTED_MODULE_2__modulos_inicio_inicio__["a" /* InicioPage */];
        this.rutas = __WEBPACK_IMPORTED_MODULE_3__modulos_rutas_rutas__["a" /* RutasPage */];
        this.tiendas = __WEBPACK_IMPORTED_MODULE_5__modulos_tiendas_principal_principal__["a" /* PrincipalPage */];
        this.mensajes = __WEBPACK_IMPORTED_MODULE_4__modulos_mensajes_mensajes__["a" /* MensajesPage */];
        this.notificaciones = __WEBPACK_IMPORTED_MODULE_6__modulos_notificaciones_notificaciones__["a" /* NotificacionesPage */];
        this.storage.get('nombreUsuario').then(function (nombreUsuario) {
            _this.usuarios.ConsultarUsuario(nombreUsuario).then(function (usu) {
                if (usu["foto"] == '')
                    usu["foto"] = "https://firebasestorage.googleapis.com/v0/b/moto-traveling.appspot.com/o/Moto%20Traveling%2Fperfil-motocilista.png?alt=media&token=a30c4856-aff4-4c98-b4de-86e0b3ae9805";
                _this.foto = usu["foto"];
            });
            console.log(nombreUsuario);
        });
    }
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        /*Subscripcion de invitaciones*/
        this.storage.get('nombreUsuario').then(function (nombreUsuario) {
            _this.nombreUsuarioSession = nombreUsuario;
            var promesa = new Promise(function (resolve, reject) {
                var resultadoConsultaFire = _this.afDB.list('invitacionesRuta/' + _this.nombreUsuarioSession).valueChanges();
                var fechaActual = new Date();
                _this.suscripcionResultadoConsultaFire = resultadoConsultaFire.subscribe(function (resp) {
                    _this.cantidadInvitacionesRutaPendientes = resp.filter(function (filtro) { return filtro.estado == "pendiente"; }).length;
                });
            });
        });
    };
    TabsPage.prototype.ngOnDestroy = function () {
        if (this.suscripcionResultadoConsultaFire != undefined)
            this.suscripcionResultadoConsultaFire.unsubscribe();
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage.prototype.llamarPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__modulos_perfil_perfil__["a" /* PerfilPage */]);
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\tabs\tabs.html"*/'<ion-header>\n\n    <ion-toolbar color="moto">\n\n\n\n        <ion-buttons end>\n\n\n\n            <button ion-button [navPush]="perfil">\n\n       <img [src]="foto" class="avatar animated bounceIn" >\n\n      </button>\n\n\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-tabs color="asphalt">\n\n        <ion-tab tabIcon="ios-home-outline" [root]="inicio"></ion-tab>\n\n        <ion-tab tabIcon="ios-map-outline" [root]="rutas"></ion-tab>\n\n        <ion-tab tabIcon="ios-chatbubbles-outline" [root]="mensajes"></ion-tab>\n\n        <ion-tab tabIcon="ios-pricetags-outline" [root]="tiendas"></ion-tab>\n\n        <ion-tab tabIcon="ios-notifications-outline" [root]="notificaciones" tabBadge="{{cantidadInvitacionesRutaPendientes}}" tabBadgeStyle="danger"></ion-tab>\n\n    </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\tabs\tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_10__Clases_Modulos_Usuarios_usuarios_cs__["a" /* Usuarios */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Normal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Usuarios_usuarios_cs__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Normal = (function () {
    function Normal(af, usuarios) {
        this.af = af;
        this.usuarios = usuarios;
    }
    Normal.prototype.SubirPost = function (post) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.af.database.ref('/post/normal').push(post).then(function (res) {
                resolve();
            });
        });
        return promise;
    };
    Normal.prototype.ConsultarPost = function () {
        var _this = this;
        var result = this.af.list('post/normal').valueChanges().map(function (posts) {
            for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                var post = posts_1[_i];
                // console.log("hola"+post.key);
                post["usuario"] = _this.af.object('/usuarios/' + post["idUsuario"]).valueChanges();
            }
            return posts.reverse();
        });
        return result;
    };
    return Normal;
}());
Normal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__Usuarios_usuarios_cs__["a" /* Usuarios */]])
], Normal);

//# sourceMappingURL=Normal.cs.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearUsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrearUsuarioProvider = (function () {
    function CrearUsuarioProvider(afDB) {
        this.afDB = afDB;
        this.usuarioExistente = true;
        this.llaveUsuario = "";
    }
    CrearUsuarioProvider.prototype.crearUsuario = function (usuario) {
        var _this = this;
        var idUsuario = usuario.correo.replace('@', '').replace('.', '');
        var promesa = new Promise(function (resolve, reject) {
            var result = _this.afDB.object('usuarios/' + idUsuario).valueChanges();
            result.subscribe(function (res) {
                if (res == null) {
                    _this.afDB.list('usuarios').set(idUsuario, usuario).then(function (res) {
                        resolve();
                    }).catch(function (err) {
                        resolve();
                        console.error(err);
                    });
                }
                else {
                    resolve();
                    console.log("existe usuario");
                }
            }, function (err) {
                resolve();
                console.error("error" + err);
            });
        });
        return promesa;
        //validar que exista usuario:
    };
    CrearUsuarioProvider.prototype.ConsultarInfoSalud = function (idUsuario) {
        var _this = this;
        var iinfoSalud;
        var promise = new Promise(function (resolve, reject) {
            var infoSalud = _this.afDB.object('usuarios/' + idUsuario + '/emergencia/infosalud').valueChanges();
            infoSalud.subscribe(function (res) {
                if (res != null) {
                    iinfoSalud = res;
                }
                resolve(iinfoSalud);
            });
        });
        return promise;
    };
    CrearUsuarioProvider.prototype.InsertarInfoSalud = function (idUsuario, infoSalud) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var result = _this.afDB.object('usuarios/' + idUsuario + '/emergencia/infoSalud').valueChanges();
            result.subscribe(function (res) {
                if (res == null) {
                    _this.afDB.list('usuarios/' + idUsuario)
                        .set("emergencia", { "infosalud": { "EPS": infoSalud.EPS, "TipoSangre": infoSalud.TipoSangre, "Documento": infoSalud.Documento } })
                        .then(function (resp) {
                        resolve();
                    })
                        .catch(function (err) { return reject(err); });
                }
                else {
                    _this.afDB.list('usuarios/' + idUsuario + '/emergencia')
                        .update("infosalud", { "EPS": infoSalud.EPS, "TipoSangre": infoSalud.TipoSangre, "Documento": infoSalud.Documento })
                        .then(function (resp) {
                        resolve();
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
            });
        });
        return promesa;
    };
    return CrearUsuarioProvider;
}());
CrearUsuarioProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], CrearUsuarioProvider);

//# sourceMappingURL=crear-usuario.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map