import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartChatSettingComponent } from './start-chat-setting.component';
import { StartChatSettingRoutingModule } from './start-chat-setting-routing.module';
import { MatTabsModule } from '@angular/material';
import { ListStartchatSettingModule } from './list-startchat-setting/list-startchat-setting.module';
import { DefaultSettingModule } from './default-setting/default-setting.module';
@NgModule({
  imports: [
    CommonModule,
    StartChatSettingRoutingModule,
    MatTabsModule,
    ListStartchatSettingModule,
    DefaultSettingModule
  ],
  declarations: [StartChatSettingComponent]
})
export class StartChatSettingModule {}
