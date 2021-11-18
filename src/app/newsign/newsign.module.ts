import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsignPageRoutingModule } from './newsign-routing.module';

import { NewsignPage } from './newsign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsignPageRoutingModule
  ],
  declarations: [NewsignPage]
})
export class NewsignPageModule {}
