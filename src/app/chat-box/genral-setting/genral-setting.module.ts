import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenralSettingComponent } from './genral-setting.component';
import { GenralSettingRoutingModule } from './genral-setting-routing.module';

@NgModule({
  imports: [CommonModule, GenralSettingRoutingModule],
  declarations: [GenralSettingComponent]
})
export class GenralSettingModule {}
