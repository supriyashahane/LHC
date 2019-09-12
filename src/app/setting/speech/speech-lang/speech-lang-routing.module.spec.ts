import { SpeechLangRoutingModule } from './speech-lang-routing.module';

describe('SpeechLangRoutingModule', () => {
  let speechLangRoutingModule: SpeechLangRoutingModule;

  beforeEach(() => {
    speechLangRoutingModule = new SpeechLangRoutingModule();
  });

  it('should create an instance', () => {
    expect(speechLangRoutingModule).toBeTruthy();
  });
});
