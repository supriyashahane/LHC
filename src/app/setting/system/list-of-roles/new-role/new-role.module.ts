import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRoleComponent } from './new-role.component';
import { NewRoleRoutingModule } from './new-role-routing.module';

@NgModule({
  imports: [CommonModule, NewRoleRoutingModule],
  declarations: [NewRoleComponent]
})
export class NewRoleModule {}
