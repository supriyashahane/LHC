import { AdminThemeRoutingModule } from './admin-theme-routing.module';

describe('AdminThemeRoutingModule', () => {
  let adminThemeRoutingModule: AdminThemeRoutingModule;

  beforeEach(() => {
    adminThemeRoutingModule = new AdminThemeRoutingModule();
  });

  it('should create an instance', () => {
    expect(adminThemeRoutingModule).toBeTruthy();
  });
});
