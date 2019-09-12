import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseOffersComponent } from './browse-offers.component';
import { BrowseOffersRoutingModule } from './browse-offers-routing.module';
import { BrowseYourOfferModule } from './browse-your-offer/browse-your-offer.module';
import { HtmlCodeModule } from './html-code/html-code.module';
import { EmbedCodeModule } from './embed-code/embed-code.module';

@NgModule({
  imports: [CommonModule, BrowseOffersRoutingModule, BrowseYourOfferModule, HtmlCodeModule, EmbedCodeModule],
  declarations: [BrowseOffersComponent]
})
export class BrowseOffersModule {}
