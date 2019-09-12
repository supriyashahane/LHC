import { LanguagesModule } from './languages.module';

describe('LanguagesModule', () => {
  let languagesModule: LanguagesModule;

  beforeEach(() => {
    languagesModule = new LanguagesModule();
  });

  it('should create an instance', () => {
    expect(languagesModule).toBeTruthy();
  });
});
