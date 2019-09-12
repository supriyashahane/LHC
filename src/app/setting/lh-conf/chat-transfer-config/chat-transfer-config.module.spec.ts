import { ChatTransferConfigModule } from './chat-transfer-config.module';

describe('ChatTransferConfigModule', () => {
  let chatTransferConfigModule: ChatTransferConfigModule;

  beforeEach(() => {
    chatTransferConfigModule = new ChatTransferConfigModule();
  });

  it('should create an instance', () => {
    expect(chatTransferConfigModule).toBeTruthy();
  });
});
