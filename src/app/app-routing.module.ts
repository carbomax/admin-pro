import { NotfoundpageComponent } from './shared/notfoundpage/notfoundpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
    import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'login', component: LoginComponent
  },

  {
    path: '', pathMatch: 'full', redirectTo: '/dashboard'
  },
  {
    path: '**', component: NotfoundpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,  {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
