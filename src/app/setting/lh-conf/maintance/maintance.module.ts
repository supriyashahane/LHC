import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintanceComponent } from './maintance.component';
import { MaintanceRoutingModule } from './maintance-routing.module';

@NgModule({
  imports: [CommonModule, MaintanceRoutingModule],
  declarations: [MaintanceComponent]
})
export class MaintanceModule {}
