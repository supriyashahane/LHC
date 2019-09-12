import { LhConfRoutingModule } from './lh-conf-routing.module';

describe('LhConfRoutingModule', () => {
  let lhConfRoutingModule: LhConfRoutingModule;

  beforeEach(() => {
    lhConfRoutingModule = new LhConfRoutingModule();
  });

  it('should create an instance', () => {
    expect(lhConfRoutingModule).toBeTruthy();
  });
});
