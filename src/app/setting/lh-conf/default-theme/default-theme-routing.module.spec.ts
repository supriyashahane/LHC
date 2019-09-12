import { DefaultThemeRoutingModule } from './default-theme-routing.module';

describe('DefaultThemeRoutingModule', () => {
  let defaultThemeRoutingModule: DefaultThemeRoutingModule;

  beforeEach(() => {
    defaultThemeRoutingModule = new DefaultThemeRoutingModule();
  });

  it('should create an instance', () => {
    expect(defaultThemeRoutingModule).toBeTruthy();
  });
});
