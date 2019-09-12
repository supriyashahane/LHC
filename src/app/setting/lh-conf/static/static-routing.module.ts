import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { StaticComponent } from './static.component';

const routes: Routes = [{ path: 'static', component: StaticComponent, data: { title: extract('Static') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StaticRoutingModule {}
