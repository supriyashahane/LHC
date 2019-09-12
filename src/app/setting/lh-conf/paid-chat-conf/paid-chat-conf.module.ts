import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaidChatConfComponent } from './paid-chat-conf.component';
import { PaidChatConfRoutingModule } from './paid-chat-conf-routing.module';

@NgModule({
  imports: [CommonModule, PaidChatConfRoutingModule],
  declarations: [PaidChatConfComponent]
})
export class PaidChatConfModule {}
