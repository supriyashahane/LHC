import { ChatTabInfoRoutingModule } from './chat-tab-info-routing.module';

describe('ChatTabInfoRoutingModule', () => {
  let chatTabInfoRoutingModule: ChatTabInfoRoutingModule;

  beforeEach(() => {
    chatTabInfoRoutingModule = new ChatTabInfoRoutingModule();
  });

  it('should create an instance', () => {
    expect(chatTabInfoRoutingModule).toBeTruthy();
  });
});
