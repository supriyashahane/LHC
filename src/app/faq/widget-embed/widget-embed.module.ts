import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetEmbedComponent } from './widget-embed.component';
import { WidgetEmbedRoutingModule } from './widget-embed-routing.module';

@NgModule({
  imports: [CommonModule, WidgetEmbedRoutingModule],
  declarations: [WidgetEmbedComponent]
})
export class WidgetEmbedModule {}
