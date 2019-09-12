import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditGroupComponent } from './edit-group.component';
import { EditGroupRoutingModule } from './edit-group-routing.module';

@NgModule({
  imports: [CommonModule, EditGroupRoutingModule],
  declarations: [EditGroupComponent]
})
export class EditGroupModule {}
