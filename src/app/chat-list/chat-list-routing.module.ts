import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ChatListComponent } from './chat-list.component';

const routes: Routes = [{ path: '', component: ChatListComponent, data: { title: extract('ChatList') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChatListRoutingModule {}
