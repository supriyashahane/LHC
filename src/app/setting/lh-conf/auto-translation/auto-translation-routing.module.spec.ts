import { AutoTranslationRoutingModule } from './auto-translation-routing.module';

describe('AutoTranslationRoutingModule', () => {
  let autoTranslationRoutingModule: AutoTranslationRoutingModule;

  beforeEach(() => {
    autoTranslationRoutingModule = new AutoTranslationRoutingModule();
  });

  it('should create an instance', () => {
    expect(autoTranslationRoutingModule).toBeTruthy();
  });
});
