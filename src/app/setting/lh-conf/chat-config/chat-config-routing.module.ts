import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ChatConfigComponent } from './chat-config.component';

const routes: Routes = [{ path: 'chatconfig', component: ChatConfigComponent, data: { title: extract('ChatConfig') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChatConfigRoutingModule {}
