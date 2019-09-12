import { SpeechLangModule } from './speech-lang.module';

describe('SpeechLangModule', () => {
  let speechLangModule: SpeechLangModule;

  beforeEach(() => {
    speechLangModule = new SpeechLangModule();
  });

  it('should create an instance', () => {
    expect(speechLangModule).toBeTruthy();
  });
});
