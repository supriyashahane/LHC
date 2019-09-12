import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ListStartchatSettingComponent } from './list-startchat-setting.component';

const routes: Routes = [
  {
    path: 'liststartchatsetting',
    component: ListStartchatSettingComponent,
    data: { title: extract('ListStartchatSetting') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ListStartchatSettingRoutingModule {}
