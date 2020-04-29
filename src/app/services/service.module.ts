import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './services.index';
import { SharedService } from './services.index';
import { SidebarService } from './services.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ SettingsService, SharedService, SidebarService]
})
export class ServiceModule { }
