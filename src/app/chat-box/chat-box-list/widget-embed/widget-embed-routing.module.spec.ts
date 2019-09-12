import { WidgetEmbedRoutingModule } from './widget-embed-routing.module';

describe('WidgetEmbedRoutingModule', () => {
  let widgetEmbedRoutingModule: WidgetEmbedRoutingModule;

  beforeEach(() => {
    widgetEmbedRoutingModule = new WidgetEmbedRoutingModule();
  });

  it('should create an instance', () => {
    expect(widgetEmbedRoutingModule).toBeTruthy();
  });
});
