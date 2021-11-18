import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
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
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
