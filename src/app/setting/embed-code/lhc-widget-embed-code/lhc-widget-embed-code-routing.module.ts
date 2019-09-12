import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { LhcWidgetEmbedCodeComponent } from './lhc-widget-embed-code.component';

const routes: Routes = [
  { path: 'lhcwidgetembedcode', component: LhcWidgetEmbedCodeComponent, data: { title: extract('LhcWidgetEmbedCode') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LhcWidgetEmbedCodeRoutingModule {}
