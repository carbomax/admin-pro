import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SettingsService {


  settings: Settings = {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default-dark'
  }

  constructor(@Inject(DOCUMENT) private _document) {
    this.getSettings();
  }


  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  getSettings() {

    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      this.applyThema(this.settings.theme);
      console.log(`loading localStorage settings`)
    } else {
      console.log(`loading default settings values`)
      this.applyThema(this.settings.theme);
    }
  }

  applyThema(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('customTheme').setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.themeUrl = url;
    this.saveSettings();
  }

}


interface Settings {
  themeUrl: string;
  theme: string;
}
