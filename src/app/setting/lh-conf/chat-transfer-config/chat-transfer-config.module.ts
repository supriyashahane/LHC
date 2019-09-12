import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatTransferConfigComponent } from './chat-transfer-config.component';
import { ChatTransferConfigRoutingModule } from './chat-transfer-config-routing.module';

@NgModule({
  imports: [CommonModule, ChatTransferConfigRoutingModule],
  declarations: [ChatTransferConfigComponent]
})
export class ChatTransferConfigModule {}
