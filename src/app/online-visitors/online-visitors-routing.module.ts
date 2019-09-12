import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { OnlineVisitorsComponent } from './online-visitors.component';

const routes: Routes = [{ path: '', component: OnlineVisitorsComponent, data: { title: extract('OnlineVisitors') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OnlineVisitorsRoutingModule {}
