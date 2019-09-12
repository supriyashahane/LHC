import { SubscriberListModule } from './subscriber-list.module';

describe('SubscriberListModule', () => {
  let subscriberListModule: SubscriberListModule;

  beforeEach(() => {
    subscriberListModule = new SubscriberListModule();
  });

  it('should create an instance', () => {
    expect(subscriberListModule).toBeTruthy();
  });
});
