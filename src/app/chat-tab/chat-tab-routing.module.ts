import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ChatTabComponent } from './chat-tab.component';

const routes: Routes = [{ path: '', component: ChatTabComponent, data: { title: extract('ChatTab') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChatTabRoutingModule {}
