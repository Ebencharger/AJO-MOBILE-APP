import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ChangeplaPage } from '../changepla/changepla.page';
import { MyprofilePage } from '../myprofile/myprofile.page';
import { MythriftPage } from '../mythrift/mythrift.page';
import { MywalletPage } from '../mywallet/mywallet.page';
import { DashboardPage } from './dashboard.page';
import { TransactionPage } from '../transaction/transaction.page';
import { StatementPage } from '../statement/statement.page';
import { MycashoutPage } from '../mycashout/mycashout.page';




const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children:[
      {path:"", component:MywalletPage},
      {path:"mywallet", component:MywalletPage},
      {path:"myprofile", component:MyprofilePage},
      {path:"mychangeplan", component:ChangeplaPage},
      {path:"mythrift", component:MythriftPage},
      {path:"mytransaction", component:TransactionPage},
      {path:"mystatement", component:StatementPage},
      {path:"mycashout", component:MycashoutPage}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
