import { ChatStaticModule } from './chat-static.module';

describe('ChatStaticModule', () => {
  let chatStaticModule: ChatStaticModule;

  beforeEach(() => {
    chatStaticModule = new ChatStaticModule();
  });

  it('should create an instance', () => {
    expect(chatStaticModule).toBeTruthy();
  });
});
