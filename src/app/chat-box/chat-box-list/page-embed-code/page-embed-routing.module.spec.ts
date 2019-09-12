import { PageEmbedRoutingModule } from './page-embed-routing.module';

describe('PageEmbedRoutingModule', () => {
  let pageEmbedRoutingModule: PageEmbedRoutingModule;

  beforeEach(() => {
    pageEmbedRoutingModule = new PageEmbedRoutingModule();
  });

  it('should create an instance', () => {
    expect(pageEmbedRoutingModule).toBeTruthy();
  });
});
