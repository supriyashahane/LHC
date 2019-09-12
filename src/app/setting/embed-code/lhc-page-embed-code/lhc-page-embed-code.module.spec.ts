import { LHCPageEmbedCodeModule } from './lhc-page-embed-code.module';

describe('LHCPageEmbedCodeModule', () => {
  let lHCPageEmbedCodeModule: LHCPageEmbedCodeModule;

  beforeEach(() => {
    lHCPageEmbedCodeModule = new LHCPageEmbedCodeModule();
  });

  it('should create an instance', () => {
    expect(lHCPageEmbedCodeModule).toBeTruthy();
  });
});
