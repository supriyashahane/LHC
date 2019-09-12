import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XamppSettingComponent } from './xampp-setting.component';
import { XamppSettingRoutingModule } from './xampp-setting-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, XamppSettingRoutingModule, MatTabsModule],
  declarations: [XamppSettingComponent]
})
export class XamppSettingModule {}
