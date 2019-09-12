import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { DepartmentRoutingModule } from './department-routing.module';

@NgModule({
  imports: [CommonModule, DepartmentRoutingModule],
  declarations: [DepartmentComponent]
})
export class DepartmentModule {}
