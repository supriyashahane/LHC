import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { WidgetEmbedComponent } from './widget-embed.component';

const routes: Routes = [
  { path: 'widgetembed', component: WidgetEmbedComponent, data: { title: extract('WidgetEmbed') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WidgetEmbedRoutingModule {}
