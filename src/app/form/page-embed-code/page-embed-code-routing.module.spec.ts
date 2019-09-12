import { PageEmbedCodeRoutingModule } from './page-embed-code-routing.module';

describe('PageEmbedCodeRoutingModule', () => {
  let pageEmbedCodeRoutingModule: PageEmbedCodeRoutingModule;

  beforeEach(() => {
    pageEmbedCodeRoutingModule = new PageEmbedCodeRoutingModule();
  });

  it('should create an instance', () => {
    expect(pageEmbedCodeRoutingModule).toBeTruthy();
  });
});
