import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { PageEmbedCodeComponent } from './page-embed-code.component';

const routes: Routes = [
  { path: 'pageembedcode', component: PageEmbedCodeComponent, data: { title: extract('PageEmbedCode') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PageEmbedRoutingModule {}
