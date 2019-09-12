import { AutoLoginRoutingModule } from './auto-login-routing.module';

describe('AutoLoginRoutingModule', () => {
  let autoLoginRoutingModule: AutoLoginRoutingModule;

  beforeEach(() => {
    autoLoginRoutingModule = new AutoLoginRoutingModule();
  });

  it('should create an instance', () => {
    expect(autoLoginRoutingModule).toBeTruthy();
  });
});
