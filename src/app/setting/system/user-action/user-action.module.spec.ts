import { UserActionModule } from './user-action.module';

describe('UserActionModule', () => {
  let userActionModule: UserActionModule;

  beforeEach(() => {
    userActionModule = new UserActionModule();
  });

  it('should create an instance', () => {
    expect(userActionModule).toBeTruthy();
  });
});
