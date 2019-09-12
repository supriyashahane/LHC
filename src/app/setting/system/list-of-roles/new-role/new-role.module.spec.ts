import { NewRoleModule } from './new-role.module';

describe('NewRoleModule', () => {
  let newRoleModule: NewRoleModule;

  beforeEach(() => {
    newRoleModule = new NewRoleModule();
  });

  it('should create an instance', () => {
    expect(newRoleModule).toBeTruthy();
  });
});
