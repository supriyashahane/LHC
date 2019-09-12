import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ChatTabInfoComponent } from './chat-tab-info.component';

const routes: Routes = [
  { path: 'chattabinfo', component: ChatTabInfoComponent, data: { title: extract('ChatTabInfo') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChatTabInfoRoutingModule {}
