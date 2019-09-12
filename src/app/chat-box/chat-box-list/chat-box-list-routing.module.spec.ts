import { ChatBoxListRoutingModule } from './chat-box-list-routing.module';

describe('ChatBoxListRoutingModule', () => {
  let chatBoxListRoutingModule: ChatBoxListRoutingModule;

  beforeEach(() => {
    chatBoxListRoutingModule = new ChatBoxListRoutingModule();
  });

  it('should create an instance', () => {
    expect(chatBoxListRoutingModule).toBeTruthy();
  });
});
