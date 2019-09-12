import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ListOfRolesComponent } from './list-of-roles.component';

const routes: Routes = [
  { path: 'listofroles', component: ListOfRolesComponent, data: { title: extract('ListOfRoles') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ListOfRolesRoutingModule {}
