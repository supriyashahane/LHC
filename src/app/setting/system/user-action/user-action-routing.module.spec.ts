import { UserActionRoutingModule } from './user-action-routing.module';

describe('UserActionRoutingModule', () => {
  let userActionRoutingModule: UserActionRoutingModule;

  beforeEach(() => {
    userActionRoutingModule = new UserActionRoutingModule();
  });

  it('should create an instance', () => {
    expect(userActionRoutingModule).toBeTruthy();
  });
});
