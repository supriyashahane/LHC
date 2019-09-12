import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewWidgetComponent } from './new-widget.component';
import { NewWidgetRoutingModule } from './new-widget-routing.module';
import { MatTabsModule } from '@angular/material';
@NgModule({
  imports: [CommonModule, NewWidgetRoutingModule, MatTabsModule],
  declarations: [NewWidgetComponent]
})
export class NewWidgetModule {}
