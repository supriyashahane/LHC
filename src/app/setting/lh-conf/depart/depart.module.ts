import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartComponent } from './depart.component';
import { DepartRoutingModule } from './depart-routing.module';
import { DepartmentModule } from './department/department.module';
import { DepartmentGroupModule } from './department-group/department-group.module';
import { DepartmentLimitGroupModule } from './department-limit-group/department-limit-group.module';

@NgModule({
  imports: [CommonModule, DepartRoutingModule, DepartmentModule, DepartmentGroupModule, DepartmentLimitGroupModule],
  declarations: [DepartComponent]
})
export class DepartModule {}
