import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatTabInfoComponent } from './chat-tab-info.component';
import { ChatTabInfoRoutingModule } from './chat-tab-info-routing.module';

@NgModule({
  imports: [CommonModule, ChatTabInfoRoutingModule],
  declarations: [ChatTabInfoComponent]
})
export class ChatTabInfoModule {}
