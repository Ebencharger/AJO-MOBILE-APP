import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeplaPageRoutingModule } from './changepla-routing.module';

import { ChangeplaPage } from './changepla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeplaPageRoutingModule, ReactiveFormsModule
  ],
  declarations: [ChangeplaPage]
})
export class ChangeplaPageModule {}
