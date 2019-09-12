import { PendingChatTabModule } from './pending-chat-tab.module';

describe('PendingChatTabModule', () => {
  let pendingChatTabModule: PendingChatTabModule;

  beforeEach(() => {
    pendingChatTabModule = new PendingChatTabModule();
  });

  it('should create an instance', () => {
    expect(pendingChatTabModule).toBeTruthy();
  });
});
