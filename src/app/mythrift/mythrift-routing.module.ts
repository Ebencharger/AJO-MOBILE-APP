import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MythriftPage } from './mythrift.page';

const routes: Routes = [
  {
    path: '',
    component: MythriftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MythriftPageRoutingModule {}
