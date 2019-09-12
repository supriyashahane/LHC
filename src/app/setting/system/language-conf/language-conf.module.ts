import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageConfComponent } from './language-conf.component';
import { LanguageConfRoutingModule } from './language-conf-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, LanguageConfRoutingModule, MatTabsModule],
  declarations: [LanguageConfComponent]
})
export class LanguageConfModule {}
