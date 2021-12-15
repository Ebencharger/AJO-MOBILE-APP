import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycashoutPageRoutingModule } from './mycashout-routing.module';

import { MycashoutPage } from './mycashout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycashoutPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [MycashoutPage]
})
export class MycashoutPageModule {}
