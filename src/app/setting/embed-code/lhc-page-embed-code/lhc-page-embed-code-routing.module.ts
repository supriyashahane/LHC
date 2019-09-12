import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { LhcPageEmbedCodeComponent } from './lhc-page-embed-code.component';

const routes: Routes = [
  { path: 'lhcpageembedcode', component: LhcPageEmbedCodeComponent, data: { title: extract('LhcPageEmbedCode') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LhcPageEmbedCodeRoutingModule {}
