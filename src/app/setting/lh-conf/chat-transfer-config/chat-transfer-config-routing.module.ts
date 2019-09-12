import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ChatTransferConfigComponent } from './chat-transfer-config.component';

const routes: Routes = [
  { path: 'chattransferconfig', component: ChatTransferConfigComponent, data: { title: extract('ChatTransferConfig') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChatTransferConfigRoutingModule {}
