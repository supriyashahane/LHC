import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEmbedCodeComponent } from './page-embed-code.component';
import { PageEmbedCodeRoutingModule } from './page-embed-code-routing.module';

@NgModule({
  imports: [CommonModule, PageEmbedCodeRoutingModule],
  declarations: [PageEmbedCodeComponent]
})
export class PageEmbedCodeModule {}
