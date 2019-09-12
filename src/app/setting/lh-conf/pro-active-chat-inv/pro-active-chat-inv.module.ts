import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProActiveChatInvComponent } from './pro-active-chat-inv.component';
import { ProActiveChatInvRoutingModule } from './pro-active-chat-inv-routing.module';
import { NewInvModule } from './new-inv/new-inv.module';

@NgModule({
  imports: [CommonModule, ProActiveChatInvRoutingModule, NewInvModule],
  declarations: [ProActiveChatInvComponent]
})
export class ProActiveChatInvModule {}
