import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCannedComponent } from './new-canned.component';
import { NewCannedRoutingModule } from './new-canned-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, NewCannedRoutingModule, MatTabsModule],
  declarations: [NewCannedComponent]
})
export class NewCannedModule {}
