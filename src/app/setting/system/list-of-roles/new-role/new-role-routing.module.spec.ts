import { NewRoleRoutingModule } from './new-role-routing.module';

describe('NewRoleRoutingModule', () => {
  let newRoleRoutingModule: NewRoleRoutingModule;

  beforeEach(() => {
    newRoleRoutingModule = new NewRoleRoutingModule();
  });

  it('should create an instance', () => {
    expect(newRoleRoutingModule).toBeTruthy();
  });
});
