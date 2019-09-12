import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box.component';
import { ChatBoxRoutingModule } from './chat-box-routing.module';
import { GenralSettingModule } from './genral-setting/genral-setting.module';
import { ChatBoxListModule } from './chat-box-list/chat-box-list.module';

@NgModule({
  imports: [CommonModule, ChatBoxRoutingModule, GenralSettingModule, ChatBoxListModule],
  declarations: [ChatBoxComponent],
  exports: [ChatBoxComponent]
})
export class ChatBoxModule {}
