import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatTabInfoModule } from './chat-tab-info/chat-tab-info.module';
import { ChatListComponent } from './chat-list.component';
import { ChatListRoutingModule } from './chat-list-routing.module';

@NgModule({
  imports: [CommonModule, ChatListRoutingModule, ChatTabInfoModule],
  declarations: [ChatListComponent]
})
export class ChatListModule {}
