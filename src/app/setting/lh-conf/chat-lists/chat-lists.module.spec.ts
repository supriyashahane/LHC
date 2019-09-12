import { ChatListsModule } from './chat-lists.module';

describe('ChatListsModule', () => {
  let chatListsModule: ChatListsModule;

  beforeEach(() => {
    chatListsModule = new ChatListsModule();
  });

  it('should create an instance', () => {
    expect(chatListsModule).toBeTruthy();
  });
});
