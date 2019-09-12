import { AutoResponderRouterModule } from './auto-responder-router.module';

describe('AutoResponderRouterModule', () => {
  let autoResponderRouterModule: AutoResponderRouterModule;

  beforeEach(() => {
    autoResponderRouterModule = new AutoResponderRouterModule();
  });

  it('should create an instance', () => {
    expect(autoResponderRouterModule).toBeTruthy();
  });
});
