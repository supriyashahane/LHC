import { LHCWidgetEmbedCodeModule } from './lhc-widget-embed-code.module';

describe('LHCWidgetEmbedCodeModule', () => {
  let lHCWidgetEmbedCodeModule: LHCWidgetEmbedCodeModule;

  beforeEach(() => {
    lHCWidgetEmbedCodeModule = new LHCWidgetEmbedCodeModule();
  });

  it('should create an instance', () => {
    expect(lHCWidgetEmbedCodeModule).toBeTruthy();
  });
});
