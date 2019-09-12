import { ProActiveChatInvModule } from './pro-active-chat-inv.module';

describe('ProActiveChatInvModule', () => {
  let proActiveChatInvModule: ProActiveChatInvModule;

  beforeEach(() => {
    proActiveChatInvModule = new ProActiveChatInvModule();
  });

  it('should create an instance', () => {
    expect(proActiveChatInvModule).toBeTruthy();
  });
});
