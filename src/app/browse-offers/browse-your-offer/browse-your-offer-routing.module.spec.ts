import { BrowseYourOfferRoutingModule } from './browse-your-offer-routing.module';

describe('BrowseYourOfferRoutingModule', () => {
  let browseYourOfferRoutingModule: BrowseYourOfferRoutingModule;

  beforeEach(() => {
    browseYourOfferRoutingModule = new BrowseYourOfferRoutingModule();
  });

  it('should create an instance', () => {
    expect(browseYourOfferRoutingModule).toBeTruthy();
  });
});
