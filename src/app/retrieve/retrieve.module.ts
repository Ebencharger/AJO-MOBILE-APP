import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetrievePageRoutingModule } from './retrieve-routing.module';

import { RetrievePage } from './retrieve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetrievePageRoutingModule,ReactiveFormsModule
  ],
  declarations: [RetrievePage]
})
export class RetrievePageModule {}
