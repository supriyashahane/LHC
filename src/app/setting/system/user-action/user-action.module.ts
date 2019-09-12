import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserActionComponent } from './user-action.component';
import { UserActionRoutingModule } from './user-action-routing.module';

@NgModule({
  imports: [CommonModule, UserActionRoutingModule],
  declarations: [UserActionComponent]
})
export class UserActionModule {}
