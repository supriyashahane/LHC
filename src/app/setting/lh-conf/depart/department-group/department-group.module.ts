import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentGroupComponent } from './department-group.component';
import { DepartmentGroupRoutingModule } from './department-group-routing.module';
import { NewGroupModule } from './new-group/new-group.module';

@NgModule({
  imports: [CommonModule, DepartmentGroupRoutingModule, NewGroupModule],
  declarations: [DepartmentGroupComponent]
})
export class DepartmentGroupModule {}
