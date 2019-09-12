import { PageEmbedCodeModule } from './page-embed-code.module';

describe('PageEmbedCodeModule', () => {
  let pageEmbedCodeModule: PageEmbedCodeModule;

  beforeEach(() => {
    pageEmbedCodeModule = new PageEmbedCodeModule();
  });

  it('should create an instance', () => {
    expect(pageEmbedCodeModule).toBeTruthy();
  });
});
