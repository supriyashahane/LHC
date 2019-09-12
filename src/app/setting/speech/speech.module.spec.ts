import { SpeechModule } from './speech.module';

describe('SpeechModule', () => {
  let speechModule: SpeechModule;

  beforeEach(() => {
    speechModule = new SpeechModule();
  });

  it('should create an instance', () => {
    expect(speechModule).toBeTruthy();
  });
});
