import { HtmlCodeModule } from './html-code.module';

describe('HtmlCodeModule', () => {
  let htmlCodeModule: HtmlCodeModule;

  beforeEach(() => {
    htmlCodeModule = new HtmlCodeModule();
  });

  it('should create an instance', () => {
    expect(htmlCodeModule).toBeTruthy();
  });
});
