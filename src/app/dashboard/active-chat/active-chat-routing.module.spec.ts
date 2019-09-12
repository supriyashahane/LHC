import { ActiveChatRoutingModule } from './active-chat-routing.module';

describe('ActiveChatRoutingModule', () => {
  let activeChatRoutingModule: ActiveChatRoutingModule;

  beforeEach(() => {
    activeChatRoutingModule = new ActiveChatRoutingModule();
  });

  it('should create an instance', () => {
    expect(activeChatRoutingModule).toBeTruthy();
  });
});
