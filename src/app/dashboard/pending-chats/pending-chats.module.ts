import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingChatComponent } from './pending-chat.component';
import { PendingChatRoutingModule } from './pending-chat-routing.module';
@NgModule({
  imports: [CommonModule, PendingChatRoutingModule],
  declarations: [PendingChatComponent]
})
export class PendingChatsModule {}
