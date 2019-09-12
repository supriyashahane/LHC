import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLanguagesComponent } from './new-languages.component';
import { NewLanguagesRoutingModule } from './new-languages-routing.module';

@NgModule({
  imports: [CommonModule, NewLanguagesRoutingModule],
  declarations: [NewLanguagesComponent]
})
export class NewLanguagesModule {}
