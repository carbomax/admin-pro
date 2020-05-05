
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';

import { DashboadComponent } from './dashboad/dashboad.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { IncrementatorComponent } from '../components/incrementator/incrementator.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({

  declarations: [
    PagesComponent,
    HeaderComponent,
    DashboadComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementatorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent
  ],
  exports: [
    PagesComponent,
    HeaderComponent,
    DashboadComponent,
    ProgressComponent,
    IncrementatorComponent,
    Graficas1Component,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ChartsModule,
    PipesModule,
    PagesRoutingModule

  ]

})

export class PagesModule { }
