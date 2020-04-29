import { NgModule } from '@angular/core';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  ],
  imports:[
    CommonModule,
    RouterModule
  ]
})

export class SharedModule {}
