import { ChatTabInfoModule } from './chat-tab-info.module';

describe('ChatTabInfoModule', () => {
  let chatTabInfoModule: ChatTabInfoModule;

  beforeEach(() => {
    chatTabInfoModule = new ChatTabInfoModule();
  });

  it('should create an instance', () => {
    expect(chatTabInfoModule).toBeTruthy();
  });
});
