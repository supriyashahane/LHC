import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { TimeZoneSettingComponent } from './time-zone-setting.component';

const routes: Routes = [
  { path: 'timezonesetting', component: TimeZoneSettingComponent, data: { title: extract('TimeZoneSetting') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TimeZoneSettingRoutingModule {}
