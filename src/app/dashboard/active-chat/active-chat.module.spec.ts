import { ActiveChatModule } from './active-chat.module';

describe('ActiveChatModule', () => {
  let activeChatModule: ActiveChatModule;

  beforeEach(() => {
    activeChatModule = new ActiveChatModule();
  });

  it('should create an instance', () => {
    expect(activeChatModule).toBeTruthy();
  });
});
