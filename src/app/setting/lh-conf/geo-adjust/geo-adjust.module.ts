import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoAdjustComponent } from './geo-adjust.component';
import { GeoAdjustRoutingModule } from './geo-adjust-routing.module';

@NgModule({
  imports: [CommonModule, GeoAdjustRoutingModule],
  declarations: [GeoAdjustComponent]
})
export class GeoAdjustModule {}
