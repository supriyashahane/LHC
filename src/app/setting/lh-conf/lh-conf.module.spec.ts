import { LHConfModule } from './lh-conf.module';

describe('LHConfModule', () => {
  let lHConfModule: LHConfModule;

  beforeEach(() => {
    lHConfModule = new LHConfModule();
  });

  it('should create an instance', () => {
    expect(lHConfModule).toBeTruthy();
  });
});
