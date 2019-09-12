import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { PageEmbedCodeModule } from './page-embed-code/page-embed-code.module';
import { ListOfFormModule } from './list-of-form/list-of-form.module';

@NgModule({
  imports: [CommonModule, FormRoutingModule, PageEmbedCodeModule, ListOfFormModule],
  declarations: [FormComponent]
})
export class FormModule {}
