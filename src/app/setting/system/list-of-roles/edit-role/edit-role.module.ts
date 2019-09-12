import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoleComponent } from './edit-role.component';
import { EditRoleRoutingModule } from './edit-role-routing.module';

@NgModule({
  imports: [CommonModule, EditRoleRoutingModule],
  declarations: [EditRoleComponent]
})
export class EditRoleModule {}
