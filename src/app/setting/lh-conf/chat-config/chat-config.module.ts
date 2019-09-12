import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatConfigComponent } from './chat-config.component';
import { ChatConfigRoutingModule } from './chat-config-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, ChatConfigRoutingModule, MatTabsModule],
  declarations: [ChatConfigComponent]
})
export class ChatConfigModule {}
