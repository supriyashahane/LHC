import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { XamppSettingComponent } from './xampp-setting.component';

const routes: Routes = [
  { path: 'xamppsetting', component: XamppSettingComponent, data: { title: extract('XamppSetting') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class XamppSettingRoutingModule {}
