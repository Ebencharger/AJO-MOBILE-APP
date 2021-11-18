import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MysignupPage } from './mysignup.page';

const routes: Routes = [
  {
    path: '',
    component: MysignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MysignupPageRoutingModule {}
