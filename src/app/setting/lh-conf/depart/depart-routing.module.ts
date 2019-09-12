import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { DepartComponent } from './depart.component';

const routes: Routes = [{ path: 'depart', component: DepartComponent, data: { title: extract('Depart') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DepartRoutingModule {}
