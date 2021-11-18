import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsignPage } from './newsign.page';

const routes: Routes = [
  {
    path: '',
    component: NewsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsignPageRoutingModule {}
