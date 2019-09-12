import { DefaultAdminThemeRoutingModule } from './default-admin-theme-routing.module';

describe('DefaultAdminThemeRoutingModule', () => {
  let defaultAdminThemeRoutingModule: DefaultAdminThemeRoutingModule;

  beforeEach(() => {
    defaultAdminThemeRoutingModule = new DefaultAdminThemeRoutingModule();
  });

  it('should create an instance', () => {
    expect(defaultAdminThemeRoutingModule).toBeTruthy();
  });
});
