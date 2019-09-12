import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMailTemplateComponent } from './e-mail-template.component';
import { EMailTemplateRoutingModule } from './e-mail-template-routing.module';
import { EditTempModule } from './edit-temp/edit-temp.module';

@NgModule({
  imports: [CommonModule, EMailTemplateRoutingModule, EditTempModule],
  declarations: [EMailTemplateComponent]
})
export class EMailTemplateModule {}
