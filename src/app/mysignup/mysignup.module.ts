import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysignupPageRoutingModule } from './mysignup-routing.module';

import { MysignupPage } from './mysignup.page';
import {Angular4PaystackModule} from 'angular4-paystack'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysignupPageRoutingModule,ReactiveFormsModule,
    Angular4PaystackModule.forRoot('pk_test_b151276bd6786f5c094f1c35d7ee0008f073fb2d'),
  ],
  declarations: [MysignupPage]
})
export class MysignupPageModule {}
