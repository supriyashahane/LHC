import { ChatTransferConfigRoutingModule } from './chat-transfer-config-routing.module';

describe('ChatTransferConfigRoutingModule', () => {
  let chatTransferConfigRoutingModule: ChatTransferConfigRoutingModule;

  beforeEach(() => {
    chatTransferConfigRoutingModule = new ChatTransferConfigRoutingModule();
  });

  it('should create an instance', () => {
    expect(chatTransferConfigRoutingModule).toBeTruthy();
  });
});
