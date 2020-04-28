import { NgModule } from '@angular/core';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    BreadcrumbsComponent,
    NotfoundpageComponent
  ],
  exports: [
    SidebarComponent,
    BreadcrumbsComponent,
    NotfoundpageComponent
  ]
})

export class SharedModule {}
