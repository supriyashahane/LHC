import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingChatTabComponent } from './pending-chat-tab.component';
import { PendingChatTabRoutingModule } from './pending-chat-tab-routing.module';

@NgModule({
  imports: [CommonModule, PendingChatTabRoutingModule],
  declarations: [PendingChatTabComponent]
})
export class PendingChatTabModule {}
