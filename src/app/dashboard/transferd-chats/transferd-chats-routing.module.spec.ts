import { TransferdChatsRoutingModule } from './transferd-chats-routing.module';

describe('TransferdChatsRoutingModule', () => {
  let transferdChatsRoutingModule: TransferdChatsRoutingModule;

  beforeEach(() => {
    transferdChatsRoutingModule = new TransferdChatsRoutingModule();
  });

  it('should create an instance', () => {
    expect(transferdChatsRoutingModule).toBeTruthy();
  });
});
