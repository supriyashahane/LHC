import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewLimitComponent } from './new-limit.component';

const routes: Routes = [{ path: 'newlimit', component: NewLimitComponent, data: { title: extract('NewLimit') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewLimitRoutingModule {}
