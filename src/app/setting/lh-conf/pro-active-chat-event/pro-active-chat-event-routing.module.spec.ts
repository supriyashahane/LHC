import { ProActiveChatEventRoutingModule } from './pro-active-chat-event-routing.module';

describe('ProActiveChatEventRoutingModule', () => {
  let proActiveChatEventRoutingModule: ProActiveChatEventRoutingModule;

  beforeEach(() => {
    proActiveChatEventRoutingModule = new ProActiveChatEventRoutingModule();
  });

  it('should create an instance', () => {
    expect(proActiveChatEventRoutingModule).toBeTruthy();
  });
});
