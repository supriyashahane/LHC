import { WidgetThemeRoutingModule } from './widget-theme-routing.module';

describe('WidgetThemeRoutingModule', () => {
  let widgetThemeRoutingModule: WidgetThemeRoutingModule;

  beforeEach(() => {
    widgetThemeRoutingModule = new WidgetThemeRoutingModule();
  });

  it('should create an instance', () => {
    expect(widgetThemeRoutingModule).toBeTruthy();
  });
});
