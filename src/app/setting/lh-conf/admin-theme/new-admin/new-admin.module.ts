import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdminComponent } from './new-admin.component';
import { NewAdminRoutingModule } from './new-admin-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, NewAdminRoutingModule, MatTabsModule],
  declarations: [NewAdminComponent]
})
export class NewAdminModule {}
