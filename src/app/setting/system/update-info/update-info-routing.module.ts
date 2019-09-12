import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { UpdateInfoComponent } from './update-info.component';

const routes: Routes = [{ path: 'updateinfo', component: UpdateInfoComponent, data: { title: extract('UpdateInfo') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UpdateInfoRoutingModule {}
