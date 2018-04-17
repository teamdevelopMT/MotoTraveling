import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiInformacionPage } from './mi-informacion';

@NgModule({
  declarations: [
    MiInformacionPage,
  ],
  imports: [
    IonicPageModule.forChild(MiInformacionPage),
  ],
})
export class MiInformacionPageModule {}
