import { AutoResponderModule } from './auto-responder.module';

describe('AutoResponderModule', () => {
  let autoResponderModule: AutoResponderModule;

  beforeEach(() => {
    autoResponderModule = new AutoResponderModule();
  });

  it('should create an instance', () => {
    expect(autoResponderModule).toBeTruthy();
  });
});
