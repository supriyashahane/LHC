import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoDetectionComponent } from './geo-detection.component';
import { GeoDetectionRoutingModule } from './geo-detection-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, GeoDetectionRoutingModule, MatTabsModule],
  declarations: [GeoDetectionComponent]
})
export class GeoDetectionModule {}
