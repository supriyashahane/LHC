import { WidgetThemeModule } from './widget-theme.module';

describe('WidgetThemeModule', () => {
  let widgetThemeModule: WidgetThemeModule;

  beforeEach(() => {
    widgetThemeModule = new WidgetThemeModule();
  });

  it('should create an instance', () => {
    expect(widgetThemeModule).toBeTruthy();
  });
});
