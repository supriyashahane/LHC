import { NewCampaingnsModule } from './new-campaingns.module';

describe('NewCampaingnsModule', () => {
  let newCampaingnsModule: NewCampaingnsModule;

  beforeEach(() => {
    newCampaingnsModule = new NewCampaingnsModule();
  });

  it('should create an instance', () => {
    expect(newCampaingnsModule).toBeTruthy();
  });
});
