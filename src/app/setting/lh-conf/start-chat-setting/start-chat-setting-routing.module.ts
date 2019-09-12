import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { StartChatSettingComponent } from './start-chat-setting.component';

const routes: Routes = [
  { path: 'startchatsetting', component: StartChatSettingComponent, data: { title: extract('StartChatSetting') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StartChatSettingRoutingModule {}
