import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferdChatsComponent } from './transferd-chats.component';
import { TransferdChatsRoutingModule } from './transferd-chats-routing.module';

@NgModule({
  imports: [CommonModule, TransferdChatsRoutingModule],
  declarations: [TransferdChatsComponent]
})
export class TransferdChatsModule {}
