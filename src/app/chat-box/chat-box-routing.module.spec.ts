import { ChatBoxRoutingModule } from './chat-box-routing.module';

describe('ChatBoxRoutingModule', () => {
  let chatBoxRoutingModule: ChatBoxRoutingModule;

  beforeEach(() => {
    chatBoxRoutingModule = new ChatBoxRoutingModule();
  });

  it('should create an instance', () => {
    expect(chatBoxRoutingModule).toBeTruthy();
  });
});
