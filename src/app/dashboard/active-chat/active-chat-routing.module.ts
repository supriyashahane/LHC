import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ActiveChatComponent } from './active-chat.component';

const routes: Routes = [{ path: 'activechat', component: ActiveChatComponent, data: { title: extract('ActiveChat') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ActiveChatRoutingModule {}
