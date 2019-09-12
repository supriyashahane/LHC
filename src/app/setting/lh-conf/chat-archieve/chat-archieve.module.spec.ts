import { ChatArchieveModule } from './chat-archieve.module';

describe('ChatArchieveModule', () => {
  let chatArchieveModule: ChatArchieveModule;

  beforeEach(() => {
    chatArchieveModule = new ChatArchieveModule();
  });

  it('should create an instance', () => {
    expect(chatArchieveModule).toBeTruthy();
  });
});
