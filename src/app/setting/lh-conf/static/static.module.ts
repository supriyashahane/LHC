import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticComponent } from './static.component';
import { StaticRoutingModule } from './static-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, StaticRoutingModule, MatTabsModule],
  declarations: [StaticComponent]
})
export class StaticModule {}
