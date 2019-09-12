import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentLimitGroupComponent } from './department-limit-group.component';
import { DepartmentLimitGroupRoutingModule } from './department-limit-group-routing.module';
import { NewLimitModule } from './new-limit/new-limit.module';

@NgModule({
  imports: [CommonModule, DepartmentLimitGroupRoutingModule, NewLimitModule],
  declarations: [DepartmentLimitGroupComponent]
})
export class DepartmentLimitGroupModule {}
