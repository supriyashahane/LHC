import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ProActiveChatInvComponent } from './pro-active-chat-inv.component';

const routes: Routes = [
  { path: 'proactivechatinv', component: ProActiveChatInvComponent, data: { title: extract('ProActiveChatInv') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProActiveChatInvRoutingModule {}
