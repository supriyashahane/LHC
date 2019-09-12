import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatTabComponent } from './chat-tab.component';
import { ChatTabRoutingModule } from './chat-tab-routing.module';
import { PendingChatTabModule } from './pending-chat-tab/pending-chat-tab.module';

@NgModule({
  imports: [CommonModule, ChatTabRoutingModule, PendingChatTabModule],
  declarations: [ChatTabComponent]
})
export class ChatTabModule {}
