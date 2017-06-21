import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScannerPage } from './scanner';

@NgModule({
  declarations: [
    ScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannerPage),
  ],
  exports: [
    ScannerPage
  ]
})
export class ScannerPageModule {}
