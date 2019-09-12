import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProActiveChatComponentComponent } from './pro-active-chat-component.component';
import { ProActiveChatComponentRoutingModule } from './pro-active-chat-component-routing.module';
import { NewCampaingnsModule } from './new-campaingns/new-campaingns.module';

@NgModule({
  imports: [CommonModule, ProActiveChatComponentRoutingModule, NewCampaingnsModule],
  declarations: [ProActiveChatComponentComponent]
})
export class ProActiveChatComponentModule {}
