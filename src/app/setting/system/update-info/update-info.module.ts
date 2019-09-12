import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateInfoComponent } from './update-info.component';
import { UpdateInfoRoutingModule } from './update-info-routing.module';

@NgModule({
  imports: [CommonModule, UpdateInfoRoutingModule],
  declarations: [UpdateInfoComponent]
})
export class UpdateInfoModule {}
