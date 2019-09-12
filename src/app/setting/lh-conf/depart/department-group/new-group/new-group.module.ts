import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGroupComponent } from './new-group.component';
import { NewGroupRoutingModule } from './new-group-routing.module';

@NgModule({
  imports: [CommonModule, NewGroupRoutingModule],
  declarations: [NewGroupComponent]
})
export class NewGroupModule {}
