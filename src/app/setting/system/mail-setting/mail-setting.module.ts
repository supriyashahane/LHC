import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailSettingComponent } from './mail-setting.component';
import { MailSettingRoutingModule } from './mail-setting-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MailSettingRoutingModule, MatTabsModule],
  declarations: [MailSettingComponent]
})
export class MailSettingModule {}
