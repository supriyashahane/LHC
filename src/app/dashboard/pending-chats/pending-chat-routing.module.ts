import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { PendingChatComponent } from './pending-chat.component';

const routes: Routes = [
  { path: 'pendingchat', component: PendingChatComponent, data: { title: extract('PendingChat') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PendingChatRoutingModule {}
