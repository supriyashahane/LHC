import { ProActiveChatEventModule } from './pro-active-chat-event.module';

describe('ProActiveChatEventModule', () => {
  let proActiveChatEventModule: ProActiveChatEventModule;

  beforeEach(() => {
    proActiveChatEventModule = new ProActiveChatEventModule();
  });

  it('should create an instance', () => {
    expect(proActiveChatEventModule).toBeTruthy();
  });
});
