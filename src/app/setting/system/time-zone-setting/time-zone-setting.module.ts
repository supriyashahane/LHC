import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeZoneSettingComponent } from './time-zone-setting.component';
import { TimeZoneSettingRoutingModule } from './time-zone-setting-routing.module';

@NgModule({
  imports: [CommonModule, TimeZoneSettingRoutingModule],
  declarations: [TimeZoneSettingComponent]
})
export class TimeZoneSettingModule {}
