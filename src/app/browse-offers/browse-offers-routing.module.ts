import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { BrowseOffersComponent } from './browse-offers.component';

const routes: Routes = [{ path: '', component: BrowseOffersComponent, data: { title: extract('BrowseOffers') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BrowseOffersRoutingModule {}
