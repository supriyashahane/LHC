import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProActiveChatEventComponent } from './pro-active-chat-event.component';
import { ProActiveChatEventRoutingModule } from './pro-active-chat-event-routing.module';
import { NewEventModule } from './new-event/new-event.module';
@NgModule({
  imports: [CommonModule, ProActiveChatEventRoutingModule, NewEventModule],
  declarations: [ProActiveChatEventComponent]
})
export class ProActiveChatEventModule {}
