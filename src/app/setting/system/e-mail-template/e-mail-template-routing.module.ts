import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { EMailTemplateComponent } from './e-mail-template.component';

const routes: Routes = [
  { path: 'emailtemplate', component: EMailTemplateComponent, data: { title: extract('EMailTemplate') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EMailTemplateRoutingModule {}
