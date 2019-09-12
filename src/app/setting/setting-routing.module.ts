import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { SettingComponent } from './setting.component';

const routes: Routes = [{ path: '', component: SettingComponent, data: { title: extract('Setting') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SettingRoutingModule {}
