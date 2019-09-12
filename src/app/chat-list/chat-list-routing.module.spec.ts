import { ChatListRoutingModule } from './chat-list-routing.module';

describe('ChatListRoutingModule', () => {
  let chatListRoutingModule: ChatListRoutingModule;

  beforeEach(() => {
    chatListRoutingModule = new ChatListRoutingModule();
  });

  it('should create an instance', () => {
    expect(chatListRoutingModule).toBeTruthy();
  });
});
