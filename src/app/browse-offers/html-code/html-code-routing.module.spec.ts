import { HtmlCodeRoutingModule } from './html-code-routing.module';

describe('HtmlCodeRoutingModule', () => {
  let htmlCodeRoutingModule: HtmlCodeRoutingModule;

  beforeEach(() => {
    htmlCodeRoutingModule = new HtmlCodeRoutingModule();
  });

  it('should create an instance', () => {
    expect(htmlCodeRoutingModule).toBeTruthy();
  });
});
