import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetThemeComponent } from './widget-theme.component';
import { WidgetThemeRoutingModule } from './widget-theme-routing.module';
import { NewWidgetModule } from './new-widget/new-widget.module';

@NgModule({
  imports: [CommonModule, WidgetThemeRoutingModule, NewWidgetModule],
  declarations: [WidgetThemeComponent]
})
export class WidgetThemeModule {}
