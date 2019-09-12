import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlCodeComponent } from './html-code.component';
import { HtmlCodeRoutingModule } from './html-code-routing.module';

@NgModule({
  imports: [CommonModule, HtmlCodeRoutingModule],
  declarations: [HtmlCodeComponent]
})
export class HtmlCodeModule {}
