import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { BrowseOfferInvComponent } from './browse-offer-inv.component';

const routes: Routes = [
  { path: 'browseofferinv', component: BrowseOfferInvComponent, data: { title: extract('BrowseOfferInv') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BrowseOfferInvRoutingModule {}
