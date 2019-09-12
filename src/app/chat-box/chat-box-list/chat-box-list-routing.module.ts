import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ChatBoxListComponent } from './chat-box-list.component';

const routes: Routes = [
  { path: 'chatboxlist', component: ChatBoxListComponent, data: { title: extract('ChatBoxList') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChatBoxListRoutingModule {}
