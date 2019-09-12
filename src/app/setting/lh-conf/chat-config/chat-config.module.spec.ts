import { ChatConfigModule } from './chat-config.module';

describe('ChatConfigModule', () => {
  let chatConfigModule: ChatConfigModule;

  beforeEach(() => {
    chatConfigModule = new ChatConfigModule();
  });

  it('should create an instance', () => {
    expect(chatConfigModule).toBeTruthy();
  });
});
