webpackJsonp([0],{

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarOpcionesPageModule", function() { return AgregarOpcionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregar_opciones__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgregarOpcionesPageModule = (function () {
    function AgregarOpcionesPageModule() {
    }
    return AgregarOpcionesPageModule;
}());
AgregarOpcionesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__agregar_opciones__["a" /* AgregarOpcionesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agregar_opciones__["a" /* AgregarOpcionesPage */]),
        ],
    })
], AgregarOpcionesPageModule);

//# sourceMappingURL=agregar-opciones.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarOpcionesPage; });
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


var AgregarOpcionesPage = (function () {
    function AgregarOpcionesPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.color = "moto";
        this.tipo = "";
        this.msgBoton = "";
        this.tipoDatoEmergencia = this.navParams.get('tipodatoEmergencia');
        if (this.tipoDatoEmergencia == 'medicamentos') {
            this.tipo = "Agregar Nuevo Medicamento";
            this.color = "google";
            this.msgBoton = "Guardar Medicamento";
        }
        else {
            this.tipo = "Agregar Nuevo Contacto";
            this.color = "moto";
            this.msgBoton = "Guardar Contacto";
        }
        console.log(this.tipoDatoEmergencia);
    }
    AgregarOpcionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarOpcionesPage');
    };
    AgregarOpcionesPage.prototype.Cerrar = function () {
        this.viewCtrl.dismiss();
    };
    return AgregarOpcionesPage;
}());
AgregarOpcionesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-agregar-opciones',template:/*ion-inline-start:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\opciones\mi-informacion\agregar-opciones\agregar-opciones.html"*/'<ion-header>\n    <ion-toolbar [color]="color">\n        <ion-title>{{tipo}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="Cerrar()">\n            <ion-icon name="ios-close-outline"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="tipoDatoEmergencia==\'contacto\'">\n        <ion-card>\n            <ion-card-header>\n                <div style="display:flex; justify-content: center; align-items: center; padding-bottom: 8px">\n                    <img src="./assets/img/contact.png">\n                </div>\n                <strong>Información de Contacto</strong>\n            </ion-card-header>\n            <ion-card-content>\n                <small>Esta información de contactos de emergencia es utilizada únicamente para notificar si tuviste un accidente o robo de motocicleta por medio de un mensaje de texto.</small>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n                <ion-list>\n                    <ion-item>\n                        <ion-label floating>Nombre</ion-label>\n                        <ion-input type="text" maxLength="25"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Telefono</ion-label>\n                        <ion-input type="number" maxLength="10"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Parentesco</ion-label>\n                        <ion-select [(ngModel)]="parentesco">\n                            <ion-option value="Padre/Madre">Padre/Madre</ion-option>\n                            <ion-option value="Familar">Familiar</ion-option>\n                            <ion-option value="Conyugue">Conyugue</ion-option>\n                            <ion-option value="Amigo">Amigo</ion-option>\n                        </ion-select>\n                    </ion-item>\n\n\n                </ion-list>\n\n\n            </ion-card-content>\n\n        </ion-card>\n    </div>\n    <div *ngIf="tipoDatoEmergencia==\'medicamentos\'">\n        <ion-card>\n            <ion-card-header>\n                <div style="display:flex; justify-content: center; align-items: center; padding-bottom: 8px">\n                    <img src="./assets/img/medicamento.png">\n                </div>\n                <strong>Información de Medicamentos</strong>\n            </ion-card-header>\n            <ion-card-content>\n                <small>Esta información de medicamentos es utilizada en caso de accidente, esto permite a la persona de primeros auxilios identificar que medicamentos poder aplicar</small>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n                <ion-list>\n                    <ion-item>\n                        <ion-label floating>Nombre</ion-label>\n                        <ion-input type="text"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n                <ion-label>¿Por qué tomas este medicamento?</ion-label>\n                <ion-textarea #msgInput rows="3" maxLength="500"></ion-textarea>\n\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <button ion-button full [color]="color" (click)="Guardar()">{{msgBoton}}</button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Edison Rojas\Documents\Proyecto\MotoTraveling\src\pages\modulos\perfil\opciones\mi-informacion\agregar-opciones\agregar-opciones.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], AgregarOpcionesPage);

//# sourceMappingURL=agregar-opciones.js.map

/***/ })

});
//# sourceMappingURL=0.js.map