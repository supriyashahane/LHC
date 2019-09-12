import { TransferdChatsModule } from './transferd-chats.module';

describe('TransferdChatsModule', () => {
  let transferdChatsModule: TransferdChatsModule;

  beforeEach(() => {
    transferdChatsModule = new TransferdChatsModule();
  });

  it('should create an instance', () => {
    expect(transferdChatsModule).toBeTruthy();
  });
});
