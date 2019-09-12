import { BrowseYourOfferModule } from './browse-your-offer.module';

describe('BrowseYourOfferModule', () => {
  let browseYourOfferModule: BrowseYourOfferModule;

  beforeEach(() => {
    browseYourOfferModule = new BrowseYourOfferModule();
  });

  it('should create an instance', () => {
    expect(browseYourOfferModule).toBeTruthy();
  });
});
