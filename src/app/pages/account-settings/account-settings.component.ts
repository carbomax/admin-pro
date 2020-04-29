import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
              public settingsService: SettingsService) { }

  ngOnInit(): void {
    this.loadCheck();
  }

  changeTheme(theme: string, link: any) {
    this.applyColor(link)
    this.settingsService.applyThema(theme);
  }

  applyColor(link) {
    const selectors: any[] = this._document.documentElement.getElementsByClassName('selector');

    for (const item of selectors) {
      item.classList.remove('working');
    }

    link.classList.add('working');

  }

  loadCheck(){
    const selectors: any[] = this._document.documentElement.getElementsByClassName('selector');

    const theme = this.settingsService.settings.theme;
    for (const item of selectors) {
      if( item.getAttribute('data-theme') === theme){
        item.classList.add('working');
      }else{
        item.classList.remove('working');
      }
    }
  }


}
