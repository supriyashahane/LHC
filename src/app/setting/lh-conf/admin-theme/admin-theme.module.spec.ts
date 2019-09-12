import { AdminThemeModule } from './admin-theme.module';

describe('AdminThemeModule', () => {
  let adminThemeModule: AdminThemeModule;

  beforeEach(() => {
    adminThemeModule = new AdminThemeModule();
  });

  it('should create an instance', () => {
    expect(adminThemeModule).toBeTruthy();
  });
});
