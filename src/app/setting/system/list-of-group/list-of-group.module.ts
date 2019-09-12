import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfGroupComponent } from './list-of-group.component';
import { ListOfGroupRoutingModule } from './list-of-group-routing.module';
import { EditGroupModule } from './edit-group/edit-group.module';
import { NewGroupModule } from './new-group/new-group.module';

@NgModule({
  imports: [CommonModule, ListOfGroupRoutingModule, EditGroupModule, NewGroupModule],
  declarations: [ListOfGroupComponent]
})
export class ListOfGroupModule {}
