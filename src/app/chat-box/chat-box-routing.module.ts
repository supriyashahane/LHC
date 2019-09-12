import { NgModule } from '@angular/core';
import { ChatBoxComponent } from './chat-box.component';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

const routes: Routes = [{ path: '', component: ChatBoxComponent, data: { title: extract('ChatBox') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChatBoxRoutingModule {}
