import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { DepartmentLimitGroupComponent } from './department-limit-group.component';

const routes: Routes = [
  {
    path: 'departmentlimitgroup',
    component: DepartmentLimitGroupComponent,
    data: { title: extract('DepartmentLimitGroup') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DepartmentLimitGroupRoutingModule {}
