import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ListOfGroupComponent } from './list-of-group.component';

const routes: Routes = [
  { path: 'listofgroup', component: ListOfGroupComponent, data: { title: extract('ListOfGroup') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ListOfGroupRoutingModule {}
