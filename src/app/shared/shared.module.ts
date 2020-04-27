import { NgModule } from '@angular/core';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';

@NgModule({
  declarations: [
    Graficas1Component,
    SidebarComponent,
    BreadcrumbsComponent,
    NotfoundpageComponent
  ],
  exports: [
    Graficas1Component,
    SidebarComponent,
    BreadcrumbsComponent,
    NotfoundpageComponent
  ]
})

export class SharedModule {}
