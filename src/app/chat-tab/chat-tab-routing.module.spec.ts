import { ChatTabRoutingModule } from './chat-tab-routing.module';

describe('ChatTabRoutingModule', () => {
  let chatTabRoutingModule: ChatTabRoutingModule;

  beforeEach(() => {
    chatTabRoutingModule = new ChatTabRoutingModule();
  });

  it('should create an instance', () => {
    expect(chatTabRoutingModule).toBeTruthy();
  });
});
