import { DefaultAdminThemeModule } from './default-admin-theme.module';

describe('DefaultAdminThemeModule', () => {
  let defaultAdminThemeModule: DefaultAdminThemeModule;

  beforeEach(() => {
    defaultAdminThemeModule = new DefaultAdminThemeModule();
  });

  it('should create an instance', () => {
    expect(defaultAdminThemeModule).toBeTruthy();
  });
});
