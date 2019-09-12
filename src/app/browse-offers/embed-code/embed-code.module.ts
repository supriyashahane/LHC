import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbedCodeComponent } from './embed-code.component';
import { EmbedCodeRoutingModule } from './embed-code-routing.module';
@NgModule({
  imports: [CommonModule, EmbedCodeRoutingModule],
  declarations: [EmbedCodeComponent]
})
export class EmbedCodeModule {}
