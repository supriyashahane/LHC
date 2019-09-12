import { LanguageConfModule } from './language-conf.module';

describe('LanguageConfModule', () => {
  let languageConfModule: LanguageConfModule;

  beforeEach(() => {
    languageConfModule = new LanguageConfModule();
  });

  it('should create an instance', () => {
    expect(languageConfModule).toBeTruthy();
  });
});
