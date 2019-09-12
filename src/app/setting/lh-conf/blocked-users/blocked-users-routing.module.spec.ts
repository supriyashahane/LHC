import { BlockedUsersRoutingModule } from './blocked-users-routing.module';

describe('BlockedUsersRoutingModule', () => {
  let blockedUsersRoutingModule: BlockedUsersRoutingModule;

  beforeEach(() => {
    blockedUsersRoutingModule = new BlockedUsersRoutingModule();
  });

  it('should create an instance', () => {
    expect(blockedUsersRoutingModule).toBeTruthy();
  });
});
