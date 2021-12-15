import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashoutPageRoutingModule } from './cashout-routing.module';

import { CashoutPage } from './cashout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyPipe,
    CashoutPageRoutingModule, ReactiveFormsModule
  ],
  declarations: [CashoutPage]
})
export class CashoutPageModule {}
