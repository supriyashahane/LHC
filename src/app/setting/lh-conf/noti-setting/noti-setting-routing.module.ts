import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NotiSettingComponent } from './noti-setting.component';

const routes: Routes = [
  { path: 'notisetting', component: NotiSettingComponent, data: { title: extract('NotiSetting') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NotiSettingRoutingModule {}
