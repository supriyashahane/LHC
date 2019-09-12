import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveChatComponent } from './active-chat.component';
import { ActiveChatRoutingModule } from './active-chat-routing.module';

@NgModule({
  imports: [CommonModule, ActiveChatRoutingModule],
  declarations: [ActiveChatComponent]
})
export class ActiveChatModule {}
