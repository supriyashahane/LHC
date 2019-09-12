import { WidgetEmbedModule } from './widget-embed.module';

describe('WidgetEmbedModule', () => {
  let widgetEmbedModule: WidgetEmbedModule;

  beforeEach(() => {
    widgetEmbedModule = new WidgetEmbedModule();
  });

  it('should create an instance', () => {
    expect(widgetEmbedModule).toBeTruthy();
  });
});
