import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { EmbedCodeComponent } from './embed-code.component';

const routes: Routes = [{ path: 'embedcode', component: EmbedCodeComponent, data: { title: extract('EmbedCode') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EmbedCodeRoutingModule {}
