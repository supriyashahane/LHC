import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ProActiveChatEventComponent } from './pro-active-chat-event.component';

const routes: Routes = [
  { path: 'proactivechatevent', component: ProActiveChatEventComponent, data: { title: extract('ProActiveChatEvent') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProActiveChatEventRoutingModule {}
