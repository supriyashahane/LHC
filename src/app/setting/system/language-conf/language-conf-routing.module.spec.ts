import { LanguageConfRoutingModule } from './language-conf-routing.module';

describe('LanguageConfRoutingModule', () => {
  let languageConfRoutingModule: LanguageConfRoutingModule;

  beforeEach(() => {
    languageConfRoutingModule = new LanguageConfRoutingModule();
  });

  it('should create an instance', () => {
    expect(languageConfRoutingModule).toBeTruthy();
  });
});
