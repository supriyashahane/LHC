import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages.component';
import { LanguagesRoutingModule } from './languages-routing.module';
import { NewLanguagesModule } from './new-languages/new-languages.module';

@NgModule({
  imports: [CommonModule, LanguagesRoutingModule, NewLanguagesModule],
  declarations: [LanguagesComponent]
})
export class LanguagesModule {}
