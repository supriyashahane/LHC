import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { PendingChatTabComponent } from './pending-chat-tab.component';

const routes: Routes = [
  { path: 'pendingchattab', component: PendingChatTabComponent, data: { title: extract('PendingChatTab') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PendingChatTabRoutingModule {}
