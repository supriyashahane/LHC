import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfRolesComponent } from './list-of-roles.component';
import { ListOfRolesRoutingModule } from './list-of-roles-routing.module';
import { EditRoleModule } from './edit-role/edit-role.module';
import { NewRoleModule } from './new-role/new-role.module';

@NgModule({
  imports: [CommonModule, ListOfRolesRoutingModule, EditRoleModule, NewRoleModule],
  declarations: [ListOfRolesComponent]
})
export class ListOfRolesModule {}
