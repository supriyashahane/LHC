import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoTranslationComponent } from './auto-translation.component';
import { AutoTranslationRoutingModule } from './auto-translation-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, AutoTranslationRoutingModule, MatTabsModule],
  declarations: [AutoTranslationComponent]
})
export class AutoTranslationModule {}
