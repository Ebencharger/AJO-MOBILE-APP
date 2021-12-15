import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycashoutPage } from './mycashout.page';

const routes: Routes = [
  {
    path: '',
    component: MycashoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycashoutPageRoutingModule {}
