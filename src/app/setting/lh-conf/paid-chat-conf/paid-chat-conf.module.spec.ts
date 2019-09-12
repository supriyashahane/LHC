import { PaidChatConfModule } from './paid-chat-conf.module';

describe('PaidChatConfModule', () => {
  let paidChatConfModule: PaidChatConfModule;

  beforeEach(() => {
    paidChatConfModule = new PaidChatConfModule();
  });

  it('should create an instance', () => {
    expect(paidChatConfModule).toBeTruthy();
  });
});
