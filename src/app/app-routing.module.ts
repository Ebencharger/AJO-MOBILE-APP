import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mysignup',
    loadChildren: () => import('./mysignup/mysignup.module').then( m => m.MysignupPageModule)
  },
  {
    path: 'newsign',
    loadChildren: () => import('./newsign/newsign.module').then( m => m.NewsignPageModule)
  },
  {
    path: 'retrieve',
    loadChildren: () => import('./retrieve/retrieve.module').then( m => m.RetrievePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
  },
  {
    path: 'dashboard/mywallet',
    loadChildren: () => import('./mywallet/mywallet.module').then( m => m.MywalletPageModule)
  },
  {
    path: 'dashboard/myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'dashboard/mychangeplan',
    loadChildren: () => import('./changepla/changepla.module').then( m => m.ChangeplaPageModule)
  },
  {
    path: 'dashboard/mythrift',
    loadChildren: () => import('./mythrift/mythrift.module').then( m => m.MythriftPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'dashboard/mytransaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'dashboard/mystatement',
    loadChildren: () => import('./statement/statement.module').then( m => m.StatementPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'dashboard/mycashout',
    loadChildren: () => import('./mycashout/mycashout.module').then( m => m.MycashoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
