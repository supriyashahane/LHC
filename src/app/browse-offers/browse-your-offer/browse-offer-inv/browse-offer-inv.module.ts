import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseOfferInvComponent } from './browse-offer-inv.component';
import { BrowseOfferInvRoutingModule } from './browse-offer-inv-routing.module';

@NgModule({
  imports: [CommonModule, BrowseOfferInvRoutingModule],
  declarations: [BrowseOfferInvComponent]
})
export class BrowseOfferInvModule {}
