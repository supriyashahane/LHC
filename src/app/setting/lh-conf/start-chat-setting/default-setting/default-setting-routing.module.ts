import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { DefaultSettingComponent } from './default-setting.component';

const routes: Routes = [
  { path: 'defaultsetting', component: DefaultSettingComponent, data: { title: extract('DefaultSetting') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DefaultSettingRoutingModule {}
