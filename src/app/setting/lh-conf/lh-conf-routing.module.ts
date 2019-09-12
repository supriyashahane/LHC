import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { LhConfComponent } from './lh-conf.component';

const routes: Routes = [{ path: 'lhconf', component: LhConfComponent, data: { title: extract('LhConf') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LhConfRoutingModule {}
