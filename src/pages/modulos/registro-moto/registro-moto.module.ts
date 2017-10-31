import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroMotoPage } from './registro-moto';

@NgModule({
  declarations: [
    RegistroMotoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroMotoPage),
  ],
})
export class RegistroMotoPageModule {}
