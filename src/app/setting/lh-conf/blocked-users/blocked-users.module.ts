import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockedUsersRoutingModule } from './blocked-users-routing.module';
import { BlockedUsersComponent } from './blocked-users.component';

@NgModule({
  imports: [CommonModule, BlockedUsersRoutingModule],
  declarations: [BlockedUsersComponent]
})
export class BlockedUsersModule {}
