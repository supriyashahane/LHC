import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ConfigurationComponent } from './configuration.component';

const routes: Routes = [
  { path: 'configuration', component: ConfigurationComponent, data: { title: extract('Configuration') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ConfigurationRoutingModule {}
