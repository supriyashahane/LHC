import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { SystemComponent } from './system.component';

const routes: Routes = [{ path: 'system', component: SystemComponent, data: { title: extract('System') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SystemRoutingModule {}
