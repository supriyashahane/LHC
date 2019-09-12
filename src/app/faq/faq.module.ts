import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { NewAnsModule } from './new-ans/new-ans.module';
import { WidgetEmbedModule } from './widget-embed/widget-embed.module';
import { PageEmbedCodeModule } from './page-embed-code/page-embed-code.module';

@NgModule({
  imports: [CommonModule, FaqRoutingModule, NewAnsModule, WidgetEmbedModule, PageEmbedCodeModule],
  declarations: [FaqComponent]
})
export class FaqModule {}
