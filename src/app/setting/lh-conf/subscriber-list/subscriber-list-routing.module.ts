import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { SubscriberListComponent } from './subscriber-list.component';

const routes: Routes = [
  { path: 'subscriberlist', component: SubscriberListComponent, data: { title: extract('SubscriberList') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SubscriberListRoutingModule {}
