import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { DepartmentGroupComponent } from './department-group.component';

const routes: Routes = [
  { path: 'departmentgroup', component: DepartmentGroupComponent, data: { title: extract('departmentgroup') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DepartmentGroupRoutingModule {}
