import { AutoLoginModule } from './auto-login.module';

describe('AutoLoginModule', () => {
  let autoLoginModule: AutoLoginModule;

  beforeEach(() => {
    autoLoginModule = new AutoLoginModule();
  });

  it('should create an instance', () => {
    expect(autoLoginModule).toBeTruthy();
  });
});
