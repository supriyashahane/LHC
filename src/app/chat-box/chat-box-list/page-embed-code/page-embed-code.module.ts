import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEmbedCodeComponent } from './page-embed-code.component';
import { PageEmbedRoutingModule } from './page-embed-routing.module';

@NgModule({
  imports: [CommonModule, PageEmbedRoutingModule],
  declarations: [PageEmbedCodeComponent]
})
export class PageEmbedCodeModule {}
