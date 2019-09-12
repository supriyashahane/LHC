import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ProActiveChatComponentComponent } from './pro-active-chat-component.component';

const routes: Routes = [
  {
    path: 'proactivechatcomponent',
    component: ProActiveChatComponentComponent,
    data: { title: extract('ProActiveChatComponent') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProActiveChatComponentRoutingModule {}
