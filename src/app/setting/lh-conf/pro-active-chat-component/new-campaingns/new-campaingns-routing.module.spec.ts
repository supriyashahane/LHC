import { NewCampaingnsRoutingModule } from './new-campaingns-routing.module';

describe('NewCampaingnsRoutingModule', () => {
  let newCampaingnsRoutingModule: NewCampaingnsRoutingModule;

  beforeEach(() => {
    newCampaingnsRoutingModule = new NewCampaingnsRoutingModule();
  });

  it('should create an instance', () => {
    expect(newCampaingnsRoutingModule).toBeTruthy();
  });
});
