


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../services/guards/login.guard';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress'} },
      { path: 'graficas1', component: Graficas1Component , data: { title: 'Graficas'} },
      { path: 'dashboard', component: DashboadComponent , data: { title: 'Dashboard'} },
      { path: 'account-settings', component: AccountSettingsComponent , data: { title: 'Account'} },
      { path: 'promesas', component: PromesasComponent , data: { title: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent , data: { title: 'Rxjs'} },
      { path: 'profile', component: ProfileComponent , data: { title: 'Perfil'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
