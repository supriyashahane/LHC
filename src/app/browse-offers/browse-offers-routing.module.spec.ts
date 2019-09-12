import { BrowseOffersRoutingModule } from './browse-offers-routing.module';

describe('BrowseOffersRoutingModule', () => {
  let browseOffersRoutingModule: BrowseOffersRoutingModule;

  beforeEach(() => {
    browseOffersRoutingModule = new BrowseOffersRoutingModule();
  });

  it('should create an instance', () => {
    expect(browseOffersRoutingModule).toBeTruthy();
  });
});
