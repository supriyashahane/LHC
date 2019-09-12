import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineSettingComponent } from './offline-setting.component';
import { OfflineSettingRoutingModule } from './offline-setting-routing.module';

@NgModule({
  imports: [CommonModule, OfflineSettingRoutingModule],
  declarations: [OfflineSettingComponent]
})
export class OfflineSettingModule {}
