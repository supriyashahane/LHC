import { AutoTranslationModule } from './auto-translation.module';

describe('AutoTranslationModule', () => {
  let autoTranslationModule: AutoTranslationModule;

  beforeEach(() => {
    autoTranslationModule = new AutoTranslationModule();
  });

  it('should create an instance', () => {
    expect(autoTranslationModule).toBeTruthy();
  });
});
