import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { DepartmentComponent } from './department.component';

const routes: Routes = [{ path: 'department', component: DepartmentComponent, data: { title: extract('Department') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DepartmentRoutingModule {}
