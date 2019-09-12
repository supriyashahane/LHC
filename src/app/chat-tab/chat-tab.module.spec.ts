import { ChatTabModule } from './chat-tab.module';

describe('ChatTabModule', () => {
  let chatTabModule: ChatTabModule;

  beforeEach(() => {
    chatTabModule = new ChatTabModule();
  });

  it('should create an instance', () => {
    expect(chatTabModule).toBeTruthy();
  });
});
