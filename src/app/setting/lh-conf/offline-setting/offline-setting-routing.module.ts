import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { OfflineSettingComponent } from './offline-setting.component';

const routes: Routes = [
  { path: 'offlinesetting', component: OfflineSettingComponent, data: { title: extract('OfflineSetting') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OfflineSettingRoutingModule {}
