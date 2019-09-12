import { NewAdminModule } from './new-admin.module';

describe('NewAdminModule', () => {
  let newAdminModule: NewAdminModule;

  beforeEach(() => {
    newAdminModule = new NewAdminModule();
  });

  it('should create an instance', () => {
    expect(newAdminModule).toBeTruthy();
  });
});
