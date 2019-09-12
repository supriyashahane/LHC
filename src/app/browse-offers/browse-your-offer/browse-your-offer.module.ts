import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseYourOfferComponent } from './browse-your-offer.component';
import { BrowseYourOfferRoutingModule } from './browse-your-offer-routing.module';
import { BrowseOfferInvModule } from './browse-offer-inv/browse-offer-inv.module';
@NgModule({
  imports: [CommonModule, BrowseYourOfferRoutingModule, BrowseOfferInvModule],
  declarations: [BrowseYourOfferComponent]
})
export class BrowseYourOfferModule {}
