import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TlmsPage } from './tlms';

@NgModule({
  declarations: [
    TlmsPage,
  ],
  imports: [
    IonicPageModule.forChild(TlmsPage),
  ],
})
export class TlmsPageModule {}
