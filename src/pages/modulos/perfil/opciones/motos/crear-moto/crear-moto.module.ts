import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearMotoPage } from './crear-moto';

@NgModule({
  declarations: [
    CrearMotoPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearMotoPage),
  ],
})
export class CrearMotoPageModule {}
