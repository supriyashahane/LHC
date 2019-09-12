import { PendingChatRoutingModule } from './pending-chat-routing.module';

describe('PendingChatRoutingModule', () => {
  let pendingChatRoutingModule: PendingChatRoutingModule;

  beforeEach(() => {
    pendingChatRoutingModule = new PendingChatRoutingModule();
  });

  it('should create an instance', () => {
    expect(pendingChatRoutingModule).toBeTruthy();
  });
});
