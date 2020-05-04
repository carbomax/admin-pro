import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './services.index';
import { SharedService } from './services.index';
import { SidebarService } from './services.index';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http'
import { LoginGuard } from './guards/login.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ SettingsService, SharedService, SidebarService, UserService, LoginGuard]
})
export class ServiceModule { }
