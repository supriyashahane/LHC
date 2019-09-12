import { ChatConfigRoutingModule } from './chat-config-routing.module';

describe('ChatConfigRoutingModule', () => {
  let chatConfigRoutingModule: ChatConfigRoutingModule;

  beforeEach(() => {
    chatConfigRoutingModule = new ChatConfigRoutingModule();
  });

  it('should create an instance', () => {
    expect(chatConfigRoutingModule).toBeTruthy();
  });
});
