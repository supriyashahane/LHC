import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { BrowseYourOfferComponent } from './browse-your-offer.component';

const routes: Routes = [
  { path: 'browseyouroffer', component: BrowseYourOfferComponent, data: { title: extract('BrowseYourOffer') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BrowseYourOfferRoutingModule {}
