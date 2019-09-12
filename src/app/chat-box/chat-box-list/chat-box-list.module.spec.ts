import { ChatBoxListModule } from './chat-box-list.module';

describe('ChatBoxListModule', () => {
  let chatBoxListModule: ChatBoxListModule;

  beforeEach(() => {
    chatBoxListModule = new ChatBoxListModule();
  });

  it('should create an instance', () => {
    expect(chatBoxListModule).toBeTruthy();
  });
});
