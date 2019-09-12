import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewInvComponent } from './new-inv.component';
import { NewInvRoutingModule } from './new-inv-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, NewInvRoutingModule, MatTabsModule],
  declarations: [NewInvComponent]
})
export class NewInvModule {}
