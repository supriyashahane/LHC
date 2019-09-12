import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbedCodeComponent } from './embed-code.component';
import { EmbedCodeRoutingModule } from './embed-code-routing.module';
import { LHCWidgetEmbedCodeModule } from './lhc-widget-embed-code/lhc-widget-embed-code.module';
import { LHCPageEmbedCodeModule } from './lhc-page-embed-code/lhc-page-embed-code.module';

@NgModule({
  imports: [CommonModule, LHCWidgetEmbedCodeModule, LHCPageEmbedCodeModule, EmbedCodeRoutingModule],
  declarations: [EmbedCodeComponent]
})
export class EmbedCodeModule {}
