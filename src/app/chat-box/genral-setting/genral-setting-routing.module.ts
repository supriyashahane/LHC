import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { GenralSettingComponent } from './genral-setting.component';

const routes: Routes = [
  { path: 'genralsetting', component: GenralSettingComponent, data: { title: extract('GenralSetting') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GenralSettingRoutingModule {}
