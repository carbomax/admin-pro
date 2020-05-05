import { SidebarService, UserService } from './../../services/services.index';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  user: User;

  constructor(public sidebarService: SidebarService, public  userService: UserService) {
    this.user = userService.usuario;
  }

  ngOnInit(): void {
  }

}
