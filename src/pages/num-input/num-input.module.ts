import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumInputPage } from './num-input';

@NgModule({
  declarations: [
    NumInputPage,
  ],
  imports: [
    IonicPageModule.forChild(NumInputPage),
  ],
})
export class NumInputPageModule {}
