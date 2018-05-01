import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarOpcionesPage } from './agregar-opciones';

@NgModule({
  declarations: [
    AgregarOpcionesPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarOpcionesPage),
  ],
})
export class AgregarOpcionesPageModule {}
