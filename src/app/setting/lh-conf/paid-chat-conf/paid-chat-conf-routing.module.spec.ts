import { PaidChatConfRoutingModule } from './paid-chat-conf-routing.module';

describe('PaidChatConfRoutingModule', () => {
  let paidChatConfRoutingModule: PaidChatConfRoutingModule;

  beforeEach(() => {
    paidChatConfRoutingModule = new PaidChatConfRoutingModule();
  });

  it('should create an instance', () => {
    expect(paidChatConfRoutingModule).toBeTruthy();
  });
});
