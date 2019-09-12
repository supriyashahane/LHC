import { SubscriberListRoutingModule } from './subscriber-list-routing.module';

describe('SubscriberListRoutingModule', () => {
  let subscriberListRoutingModule: SubscriberListRoutingModule;

  beforeEach(() => {
    subscriberListRoutingModule = new SubscriberListRoutingModule();
  });

  it('should create an instance', () => {
    expect(subscriberListRoutingModule).toBeTruthy();
  });
});
