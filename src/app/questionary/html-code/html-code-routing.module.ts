import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { HtmlCodeComponent } from './html-code.component';

const routes: Routes = [{ path: 'htmlcode', component: HtmlCodeComponent, data: { title: extract('HtmlCode') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HtmlCodeRoutingModule {}
