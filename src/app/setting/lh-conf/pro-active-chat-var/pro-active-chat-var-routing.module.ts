import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ProActiveChatVarComponent } from './pro-active-chat-var.component';

const routes: Routes = [
  { path: 'proactivechatvar', component: ProActiveChatVarComponent, data: { title: extract('ProActiveChatVar') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProActiveChatVarRoutingModule {}
