import { SpeechRoutingModule } from './speech-routing.module';

describe('SpeechRoutingModule', () => {
  let speechRoutingModule: SpeechRoutingModule;

  beforeEach(() => {
    speechRoutingModule = new SpeechRoutingModule();
  });

  it('should create an instance', () => {
    expect(speechRoutingModule).toBeTruthy();
  });
});
