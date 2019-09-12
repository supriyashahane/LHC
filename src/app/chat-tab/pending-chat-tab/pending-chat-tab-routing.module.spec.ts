import { PendingChatTabRoutingModule } from './pending-chat-tab-routing.module';

describe('PendingChatTabRoutingModule', () => {
  let pendingChatTabRoutingModule: PendingChatTabRoutingModule;

  beforeEach(() => {
    pendingChatTabRoutingModule = new PendingChatTabRoutingModule();
  });

  it('should create an instance', () => {
    expect(pendingChatTabRoutingModule).toBeTruthy();
  });
});
