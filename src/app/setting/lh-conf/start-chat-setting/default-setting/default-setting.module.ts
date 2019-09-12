import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSettingComponent } from './default-setting.component';
import { DefaultSettingRoutingModule } from './default-setting-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, DefaultSettingRoutingModule, MatTabsModule],
  declarations: [DefaultSettingComponent]
})
export class DefaultSettingModule {}
