import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { VisitorsListComponent } from './visitors-list.component';

const routes: Routes = [
  { path: 'visitorslist', component: VisitorsListComponent, data: { title: extract('VisitorsList') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class VisitorsListRoutingModule {}
