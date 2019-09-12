import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ChatArchieveComponent } from './chat-archieve.component';

const routes: Routes = [
  { path: 'chatarchieve', component: ChatArchieveComponent, data: { title: extract('ChatArchieve') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChatArchieveRoutingModule {}
