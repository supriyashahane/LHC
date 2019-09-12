import { BrowseOfferInvModule } from './browse-offer-inv.module';

describe('BrowseOfferInvModule', () => {
  let browseOfferInvModule: BrowseOfferInvModule;

  beforeEach(() => {
    browseOfferInvModule = new BrowseOfferInvModule();
  });

  it('should create an instance', () => {
    expect(browseOfferInvModule).toBeTruthy();
  });
});
