import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { PaidChatConfComponent } from './paid-chat-conf.component';

const routes: Routes = [{ path: 'paidchat', component: PaidChatConfComponent, data: { title: extract('PaidChat') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PaidChatConfRoutingModule {}
