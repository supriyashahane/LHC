import { BlockedUsersModule } from './blocked-users.module';

describe('BlockedUsersModule', () => {
  let blockedUsersModule: BlockedUsersModule;

  beforeEach(() => {
    blockedUsersModule = new BlockedUsersModule();
  });

  it('should create an instance', () => {
    expect(blockedUsersModule).toBeTruthy();
  });
});
