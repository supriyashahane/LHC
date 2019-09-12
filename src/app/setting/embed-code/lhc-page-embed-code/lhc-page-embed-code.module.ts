import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LhcPageEmbedCodeComponent } from './lhc-page-embed-code.component';
import { LhcPageEmbedCodeRoutingModule } from './lhc-page-embed-code-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, LhcPageEmbedCodeRoutingModule, MatTabsModule],
  declarations: [LhcPageEmbedCodeComponent]
})
export class LHCPageEmbedCodeModule {}
