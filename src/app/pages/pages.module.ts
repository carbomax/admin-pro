
import { NgModule } from '@angular/core';
import { DashboadComponent } from './dashboad/dashboad.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    DashboadComponent,
    ProgressComponent
  ],
  exports: [
    PagesComponent,
    HeaderComponent,
    DashboadComponent,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]

})

export class PagesModule {}
