import { ChatArchieveRoutingModule } from './chat-archieve-routing.module';

describe('ChatArchieveRoutingModule', () => {
  let chatArchieveRoutingModule: ChatArchieveRoutingModule;

  beforeEach(() => {
    chatArchieveRoutingModule = new ChatArchieveRoutingModule();
  });

  it('should create an instance', () => {
    expect(chatArchieveRoutingModule).toBeTruthy();
  });
});
