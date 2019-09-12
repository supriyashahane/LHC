import { StaticRoutingModule } from './static-routing.module';

describe('StaticRoutingModule', () => {
  let staticRoutingModule: StaticRoutingModule;

  beforeEach(() => {
    staticRoutingModule = new StaticRoutingModule();
  });

  it('should create an instance', () => {
    expect(staticRoutingModule).toBeTruthy();
  });
});
