import { NewAdminRoutingModule } from './new-admin-routing.module';

describe('NewAdminRoutingModule', () => {
  let newAdminRoutingModule: NewAdminRoutingModule;

  beforeEach(() => {
    newAdminRoutingModule = new NewAdminRoutingModule();
  });

  it('should create an instance', () => {
    expect(newAdminRoutingModule).toBeTruthy();
  });
});
