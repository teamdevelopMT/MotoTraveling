import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoboListPage } from './robo-list';

@NgModule({
  declarations: [
    RoboListPage,
  ],
  imports: [
    IonicPageModule.forChild(RoboListPage),
  ],
})
export class RoboListPageModule {}
