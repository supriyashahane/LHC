import { BrowseOffersModule } from './browse-offers.module';

describe('BrowseOffersModule', () => {
  let browseOffersModule: BrowseOffersModule;

  beforeEach(() => {
    browseOffersModule = new BrowseOffersModule();
  });

  it('should create an instance', () => {
    expect(browseOffersModule).toBeTruthy();
  });
});
