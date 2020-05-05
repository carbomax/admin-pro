import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgenPipe } from './imgen.pipe';



@NgModule({
  declarations: [ImgenPipe],
  exports: [ImgenPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
