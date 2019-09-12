import { PendingChatsModule } from './pending-chats.module';

describe('PendingChatsModule', () => {
  let pendingChatsModule: PendingChatsModule;

  beforeEach(() => {
    pendingChatsModule = new PendingChatsModule();
  });

  it('should create an instance', () => {
    expect(pendingChatsModule).toBeTruthy();
  });
});
