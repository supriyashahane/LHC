import { LhcWidgetEmbedCodeRoutingModule } from './lhc-widget-embed-code-routing.module';

describe('LhcWidgetEmbedCodeRoutingModule', () => {
  let lhcWidgetEmbedCodeRoutingModule: LhcWidgetEmbedCodeRoutingModule;

  beforeEach(() => {
    lhcWidgetEmbedCodeRoutingModule = new LhcWidgetEmbedCodeRoutingModule();
  });

  it('should create an instance', () => {
    expect(lhcWidgetEmbedCodeRoutingModule).toBeTruthy();
  });
});
