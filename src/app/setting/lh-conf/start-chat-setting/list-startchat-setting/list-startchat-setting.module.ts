import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStartchatSettingComponent } from './list-startchat-setting.component';
import { ListStartchatSettingRoutingModule } from './list-startchat-setting-routing.module';
import { MatTabsModule } from '@angular/material';
import { NewListchatModule } from './new-listchat/new-listchat.module';

@NgModule({
  imports: [CommonModule, ListStartchatSettingRoutingModule, MatTabsModule, NewListchatModule],
  declarations: [ListStartchatSettingComponent]
})
export class ListStartchatSettingModule {}
