import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorsListModule } from './visitors-list/visitors-list.module';
import { TransferdChatsModule } from './transferd-chats/transferd-chats.module';
import { ActiveChatModule } from './active-chat/active-chat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PendingChatsModule } from './pending-chats/pending-chats.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ActiveChatModule,
    PendingChatsModule,
    TransferdChatsModule,
    VisitorsListModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
