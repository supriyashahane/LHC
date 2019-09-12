import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LhcWidgetEmbedCodeComponent } from './lhc-widget-embed-code.component';
import { LhcWidgetEmbedCodeRoutingModule } from './lhc-widget-embed-code-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, LhcWidgetEmbedCodeRoutingModule, MatTabsModule],
  declarations: [LhcWidgetEmbedCodeComponent]
})
export class LHCWidgetEmbedCodeModule {}
