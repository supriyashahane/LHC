import { DialectsRoutingModule } from './dialects-routing.module';

describe('DialectsRoutingModule', () => {
  let dialectsRoutingModule: DialectsRoutingModule;

  beforeEach(() => {
    dialectsRoutingModule = new DialectsRoutingModule();
  });

  it('should create an instance', () => {
    expect(dialectsRoutingModule).toBeTruthy();
  });
});
