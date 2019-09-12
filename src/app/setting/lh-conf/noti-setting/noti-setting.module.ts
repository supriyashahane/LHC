import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotiSettingComponent } from './noti-setting.component';
import { NotiSettingRoutingModule } from './noti-setting-routing.module';

@NgModule({
  imports: [CommonModule, NotiSettingRoutingModule],
  declarations: [NotiSettingComponent]
})
export class NotiSettingModule {}
